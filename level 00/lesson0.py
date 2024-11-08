from turtle import *





speed(0)
width(7)



#square


color("blue")

forward (200)
left(90)
forward (200)
left(90)
forward (200)
left(90)
forward (200)
left(90)

#roof

color("red")


penup()
goto(0, 200)
pendown()


left(45)
forward(145)
right(90)
forward(145)


penup()
goto(75, 0)
pendown()


#door

color ("green")




left (135)
forward (100)
right(90)
forward(60)
right(90)
forward(100)


#windows

color("yellow")




penup()
goto(20,170)
pendown()


left(90)
forward(50)
right(90)
forward(50)
right(90)
forward(50)
right(90)
forward(50)


penup()
goto(180,170)
pendown()

left(90)
forward(50)
left(90)
forward(50)
left(90)
forward(50)
left(90)
forward(50)

left(90)
forward(25)
left(90)
forward(50)

penup()
goto(45, 170)
pendown()
forward(50)









exitonclick()