import time
import pyautogui

ALVO_X = 689
ALVO_Y = 521
COR_ALVO = (75, 219, 106)

print("Aguardando...")

while True:
    if pyautogui.pixelMatchesColor(ALVO_X, ALVO_Y, COR_ALVO, tolerance=10):
        pyautogui.click(ALVO_X, ALVO_Y)
        print("Cor detectada! Clique realizado. Encerrando programa...")
        break
    time.sleep(0.001)