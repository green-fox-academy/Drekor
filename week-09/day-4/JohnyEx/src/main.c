#include "stm32f7xx.h"
#include "stm32746g_discovery.h"
#include <string.h>

// #undef __GNUC__

/* Private function prototypes -----------------------------------------------*/
#ifdef __GNUC__
/* With GCC/RAISONANCE, small printf (option LD Linker->Libraries->Small printf
 set to 'Yes') calls __io_putchar() */
#define PUTCHAR_PROTOTYPE int __io_putchar(int ch)
#else
#define PUTCHAR_PROTOTYPE int fputc(int ch, FILE *f)
#endif /* __GNUC__ */

static void SystemClock_Config(void);
static void Error_Handler(void);
static void MPU_Config(void);
static void CPU_CACHE_Enable(void);

volatile int time = 0;
volatile uint32_t start = 0;
volatile uint32_t randomNumber;
volatile int counter = 0;
volatile int push_counter = 0;
volatile int state = 0;

UART_HandleTypeDef uart_handle;
GPIO_InitTypeDef led1;
RNG_HandleTypeDef random;
GPIO_InitTypeDef conf;
TIM_HandleTypeDef TimHandle;
TIM_HandleTypeDef TimHandle3;

int main(void)
{

    MPU_Config();
    CPU_CACHE_Enable();
    HAL_Init();
    SystemClock_Config();

    uart_handle.Init.BaudRate = 115200;
    uart_handle.Init.WordLength = UART_WORDLENGTH_8B;
    uart_handle.Init.StopBits = UART_STOPBITS_1;
    uart_handle.Init.Parity = UART_PARITY_NONE;
    uart_handle.Init.HwFlowCtl = UART_HWCONTROL_NONE;
    uart_handle.Init.Mode = UART_MODE_TX_RX;
    BSP_COM_Init(COM1, &uart_handle);

    __HAL_RCC_GPIOI_CLK_ENABLE()
    ;
    conf.Pin = GPIO_PIN_11;
    conf.Pull = GPIO_NOPULL;
    conf.Speed = GPIO_SPEED_FAST;
    conf.Mode = GPIO_MODE_IT_RISING_FALLING;
    HAL_GPIO_Init(GPIOI, &conf);

    HAL_NVIC_SetPriority(EXTI15_10_IRQn, 0x0F, 0x00);
    HAL_NVIC_EnableIRQ(EXTI15_10_IRQn);

    __HAL_RCC_TIM2_CLK_ENABLE()
    ;
    TimHandle.Instance = TIM2;
    TimHandle.Init.Period = 200;
    TimHandle.Init.Prescaler = 54000;
    TimHandle.Init.ClockDivision = TIM_CLOCKDIVISION_DIV1;
    TimHandle.Init.CounterMode = TIM_COUNTERMODE_UP;

    __HAL_RCC_TIM3_CLK_ENABLE()
    ;
    TimHandle3.Instance = TIM3;
    TimHandle3.Init.Period = 4000;
    TimHandle3.Init.Prescaler = 54000;
    TimHandle3.Init.ClockDivision = TIM_CLOCKDIVISION_DIV1;
    TimHandle3.Init.CounterMode = TIM_COUNTERMODE_UP;

    HAL_NVIC_SetPriority(TIM2_IRQn, 0x0F, 0x00);
    HAL_NVIC_EnableIRQ(TIM2_IRQn);

    HAL_NVIC_SetPriority(TIM3_IRQn, 0x0F, 0x00);
    HAL_NVIC_EnableIRQ(TIM3_IRQn);

    __HAL_RCC_GPIOA_CLK_ENABLE()
    ;
    led1.Pin = GPIO_PIN_15;
    led1.Mode = GPIO_MODE_OUTPUT_PP;
    led1.Pull = GPIO_PULLDOWN;
    led1.Speed = GPIO_SPEED_HIGH;
    HAL_GPIO_Init(GPIOA, &led1);

    __HAL_RCC_RNG_CLK_ENABLE()
    ;
    random.Instance = RNG;
    HAL_RNG_MspInit(&random);
    HAL_RNG_Init(&random);

    BSP_PB_Init(BUTTON_WAKEUP, BUTTON_MODE_GPIO);
    BSP_LED_Init(LED_GREEN);

    uint32_t r = 0;
    HAL_RNG_GenerateRandomNumber(&random, &r);
    randomNumber = r;
    time = (randomNumber % 10) + 1;
    printf("%d\r\n", time);

    HAL_TIM_Base_Init(&TimHandle);
    HAL_TIM_Base_Start_IT(&TimHandle);

    printf("Let's Play the Game!\r\n");

    while (1) {

    }
}

void EXTI15_10_IRQHandler()
{
    HAL_GPIO_EXTI_IRQHandler(conf.Pin);
}

void TIM2_IRQHandler()
{
    HAL_TIM_IRQHandler(&TimHandle);
}

void TIM3_IRQHandler()
{
    HAL_TIM_IRQHandler(&TimHandle3);
}

void HAL_TIM_PeriodElapsedCallback(TIM_HandleTypeDef *htim)
{

    if (htim->Instance == TIM2) {

        if (counter < time * 2) {

            BSP_LED_Toggle(LED_GREEN);

            counter++;
        }

        if (counter / 2 == time) {

            HAL_TIM_Base_Stop_IT(&TimHandle);
            HAL_TIM_Base_DeInit(&TimHandle);

            HAL_TIM_Base_Init(&TimHandle3);
            HAL_TIM_Base_Start_IT(&TimHandle3);
        }

    } else if (htim->Instance == TIM3) {

        if (state == 0) {

            state++;

        } else {

            if (push_counter == time) {

                HAL_GPIO_WritePin(GPIOA, GPIO_PIN_15, GPIO_PIN_SET);
                printf("U are the winner!\r\n");

            } else {
                printf("", );
                printf("",);

                HAL_GPIO_TogglePin(GPIOA, GPIO_PIN_15);
                printf("Too Bad!\r\n");
            }
        }
    }
}

void HAL_GPIO_EXTI_Callback(uint16_t GPIO_Pin)
{

    HAL_TIM_Base_Stop_IT(&TimHandle3);
    HAL_TIM_Base_DeInit(&TimHandle3);

    state = 0;

    HAL_TIM_Base_Init(&TimHandle3);
    HAL_TIM_Base_Start_IT(&TimHandle3);

    push_counter++;

}

/***************************************************************************************************
 /*
 HAL_UART_Receive(&uart_handle, buffer, 4, 500);
 if (strcmp(buffer, "on") == 0) {
 HAL_GPIO_WritePin(GPIOA, GPIO_PIN_0, GPIO_PIN_SET);
 memset(buffer, '\0', 4);
 } else if (strcmp(buffer, "off") == 0) {
 HAL_GPIO_WritePin(GPIOA, GPIO_PIN_0, GPIO_PIN_RESET);
 memset(buffer, '\0', 4);
 } else if (strcmp(buffer, "\0\0\0\0") != 0) {
 for (int i = 0; i < 3; i++) {
 HAL_GPIO_WritePin(GPIOA, GPIO_PIN_0, GPIO_PIN_SET);
 HAL_Delay(100);
 HAL_GPIO_WritePin(GPIOA, GPIO_PIN_0, GPIO_PIN_RESET);
 HAL_Delay(50);
 }
 memset(buffer, '\0', 4);
 //	ch = getchar();
 }
 }*/

//HAL_GPIO_WritePin(GPIOA, GPIO_PIN_0, GPIO_PIN_RESET);
//HAL_UART_Receive(&uart_handle,text,3,500);
/**
 * @brief  Retargets the C library printf function to the USART.
 * @param  None
 * @retval None
 */
PUTCHAR_PROTOTYPE
{
    /* Place your implementation of fputc here */
    /* e.g. write a character to the EVAL_COM1 and Loop until the end of transmission */
    HAL_UART_Transmit(&uart_handle, (uint8_t *) &ch, 1, 0xFFFF);

    return ch;
}

/**
 * @brief  System Clock Configuration
 *         The system Clock is configured as follow :
 *            System Clock source            = PLL (HSE)
 *            SYSCLK(Hz)                     = 216000000
 *            HCLK(Hz)                       = 216000000
 *            AHB Prescaler                  = 1
 *            APB1 Prescaler                 = 4
 *            APB2 Prescaler                 = 2
 *            HSE Frequency(Hz)              = 25000000
 *            PLL_M                          = 25
 *            PLL_N                          = 432
 *            PLL_P                          = 2
 *            PLL_Q                          = 9
 *            VDD(V)                         = 3.3
 *            Main regulator output voltage  = Scale1 mode
 *            Flash Latency(WS)              = 7
 * @param  None
 * @retval None
 */
static void SystemClock_Config(void)
{
    RCC_ClkInitTypeDef RCC_ClkInitStruct;
    RCC_OscInitTypeDef RCC_OscInitStruct;

    /* Enable HSE Oscillator and activate PLL with HSE as source */
    RCC_OscInitStruct.OscillatorType = RCC_OSCILLATORTYPE_HSE;
    RCC_OscInitStruct.HSEState = RCC_HSE_ON;
    RCC_OscInitStruct.HSIState = RCC_HSI_OFF;
    RCC_OscInitStruct.PLL.PLLState = RCC_PLL_ON;
    RCC_OscInitStruct.PLL.PLLSource = RCC_PLLSOURCE_HSE;
    RCC_OscInitStruct.PLL.PLLM = 25;
    RCC_OscInitStruct.PLL.PLLN = 432;
    RCC_OscInitStruct.PLL.PLLP = RCC_PLLP_DIV2;
    RCC_OscInitStruct.PLL.PLLQ = 9;
    if (HAL_RCC_OscConfig(&RCC_OscInitStruct) != HAL_OK) {
        Error_Handler();
    }

    /* activate the OverDrive to reach the 216 Mhz Frequency */
    if (HAL_PWREx_EnableOverDrive() != HAL_OK) {
        Error_Handler();
    }

    /* Select PLL as system clock source and configure the HCLK, PCLK1 and PCLK2
     clocks dividers */
    RCC_ClkInitStruct.ClockType = (RCC_CLOCKTYPE_SYSCLK | RCC_CLOCKTYPE_HCLK
            | RCC_CLOCKTYPE_PCLK1 | RCC_CLOCKTYPE_PCLK2);
    RCC_ClkInitStruct.SYSCLKSource = RCC_SYSCLKSOURCE_PLLCLK;
    RCC_ClkInitStruct.AHBCLKDivider = RCC_SYSCLK_DIV1;
    RCC_ClkInitStruct.APB1CLKDivider = RCC_HCLK_DIV4;
    RCC_ClkInitStruct.APB2CLKDivider = RCC_HCLK_DIV2;
    if (HAL_RCC_ClockConfig(&RCC_ClkInitStruct, FLASH_LATENCY_7) != HAL_OK) {
        Error_Handler();
    }
}

/**
 * @brief  This function is executed in case of error occurrence.
 * @param  None
 * @retval None
 */
static void Error_Handler(void)
{
    /* User may add here some code to deal with this error */
    while (1) {
    }
}

/**
 * @brief  Configure the MPU attributes as Write Through for SRAM1/2.
 * @note   The Base Address is 0x20010000 since this memory interface is the AXI.
 *         The Region Size is 256KB, it is related to SRAM1 and SRAM2  memory size.
 * @param  None
 * @retval None
 */
static void MPU_Config(void)
{
    MPU_Region_InitTypeDef MPU_InitStruct;

    /* Disable the MPU */
    HAL_MPU_Disable();

    /* Configure the MPU attributes as WT for SRAM */
    MPU_InitStruct.Enable = MPU_REGION_ENABLE;
    MPU_InitStruct.BaseAddress = 0x20010000;
    MPU_InitStruct.Size = MPU_REGION_SIZE_256KB;
    MPU_InitStruct.AccessPermission = MPU_REGION_FULL_ACCESS;
    MPU_InitStruct.IsBufferable = MPU_ACCESS_NOT_BUFFERABLE;
    MPU_InitStruct.IsCacheable = MPU_ACCESS_CACHEABLE;
    MPU_InitStruct.IsShareable = MPU_ACCESS_SHAREABLE;
    MPU_InitStruct.Number = MPU_REGION_NUMBER0;
    MPU_InitStruct.TypeExtField = MPU_TEX_LEVEL0;
    MPU_InitStruct.SubRegionDisable = 0x00;
    MPU_InitStruct.DisableExec = MPU_INSTRUCTION_ACCESS_ENABLE;

    HAL_MPU_ConfigRegion(&MPU_InitStruct);

    /* Enable the MPU */
    HAL_MPU_Enable(MPU_PRIVILEGED_DEFAULT);
}

/**
 * @brief  CPU L1-Cache enable.
 * @param  None
 * @retval None
 */
static void CPU_CACHE_Enable(void)
{
    /* Enable I-Cache */
    SCB_EnableICache();

    /* Enable D-Cache */
    SCB_EnableDCache();
}

#ifdef  USE_FULL_ASSERT

/**
 * @brief  Reports the name of the source file and the source line number
 *         where the assert_param error has occurred.
 * @param  file: pointer to the source file name
 * @param  line: assert_param error line source number
 * @retval None
 */
void assert_failed(uint8_t* file, uint32_t line)
{
    /* User can add his own implementation to report the file name and line number,
     ex: printf("Wrong parameters value: file %s on line %d\r\n", file, line) */

    /* Infinite loop */
    while (1)
    {
    }
}
#endif
