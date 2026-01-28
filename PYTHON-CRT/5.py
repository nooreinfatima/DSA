from datetime import datetime
time_format = "%H:%M"
class_started = datetime.strptime("13:20", time_format)
class_reached = datetime.strptime("14:00", time_format)
difference = class_reached - class_started
print("Time difference:", difference)