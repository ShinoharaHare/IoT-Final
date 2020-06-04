from gpiozero import Servo
from time import sleep

servo = Servo(14, min_pulse_width=0.0005, max_pulse_width=0.0025, frame_width=0.020)

try:
	#while(True):
		print("min")
		servo.min()
		sleep(1)
		print("max")
		servo.max()
		sleep(3)
except KeyboardInterrupt:
	print("666")

