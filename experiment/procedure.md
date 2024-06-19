### Procedure

**Plant Setup:**
								
<div align="center">
<img  src="./images/scth.png" style="width:81%;height:30%"><br/>
<b>Fig. 1. Schematic diagram of rectilinear motion control plant</b>
</div>
								
								
**Steps to perform the simulation**
								
1. First drag weights and drop them sequentially (move the top weight to the bottom blue dotted box and do the same for the second weight by placing it in the second lowest box.) in the mass carriage system. 
Each weight is 500 g. First drag all the weights (i.e. 2 kg mass).
							  
2. Under 'Controls' section click on 'Trajectory' under command tab, then click on 'Step'. After that click on 'Set Up', put step size to zero, set dwell time to 3000 ms and 2 repetition . Select 'Open loop step' and 'Ok'.
							 
3. Click on "Setup Data Acquisition" under 'Data' tab, put 2 as the value of servo cycles and select 'Encoder Position'.

4. Drag the mass carriage system through the slider up to -2.5 cm.

5. Click on 'Execute' under 'command', then click on 'RUN' button. The system starts to oscillate.

6. After the carriage stops oscillating, an alert massage will be shown. Click on 'Ok'.

7. Click on 'Set up Plot' under 'Plotting'. Select 'Encoder Position' and click on 'Ok'.

8.  Click on 'Plot data' under 'Plotting' ,the open loop step response for the particular mass chosen, will be shown. Plot can be ownloaded by clicking on 'Download Plot' button.
							 
9. Click on 'Reset Controller' under 'Utility' tab. Now to observe the response for unloaded mass choose no weights and follow the steps 2-8.
							
10. Under 'Calculation' tab select 'Without Damper', enter both the mass values chosen ( for ex. here the first mass was 2kg and second one is 0kg ) and click on 'Simulate' button to have the values of M<sub>c</sub> (weight of the carriage) and K (spring constant).

11. Now click on 'Connect Dashpot' button to connect the dashpot to the mass carriage system.
							 
12. Similarly drag 2 kg weight again and follow the above steps 2-8 to observe open loop step response of the mass carriage system with connected dashpot.
In this case 'Encoder Position' will be default selection in step 3.
							 
13. Under 'Calculation' tab select 'With Damper', enter the mass value chosen (ex. here the mass was 2 kg) and click on 'Simulate' to have the value of (dashpot damping coefficient).
							 
14. To observe system velocity first remove dashpot from the mass carriage system by clicking on 'Remove Dashpot' button. Now secure 2 kg mass in the carriage.
							 
15. Follow steps 2-8 with some following edits.
i) In step 2 set dwell time to 75 ms and repetition 3.
ii)In step 3 select 'Encoder Velocity'.
iii)In step 7 Select 'Encoder Velocity' and click on 'Ok'.
					 
16. To calculate acceleration first assume a positive-sloped linear segment (two points on positive slope forming straight line) from velocity vs. time plot. Align the slope line (red coloured line) 
with the assumed linear segment using 'Adjust slope angle', 'Adjust slope length', 'Horizontal movement' and 'Vertical movement' buttons.

<div align="center">
<img  src="./images/plot2.png" class="img-fluid"><br/>
	
<b>Fig. 2. Calculation of positive slope acceleration</b>
</div>
							 
17. Click on clockwise arrow symbol on 'Adjust slope angle' button to rotate the slope line in clockwise direction.
Click on counter-clockwise arrow symbol on 'Adjust slope angle' button to rotate the slope line in anti clockwise direction.

Click on plus symbol on 'Adjust slope length' button to increase the length of the slope line.
Click on minus symbol on 'Adjust slope length' button to decrease the length of the slope line.

Click on the arrow symbol in the left side on 'Horizontal movement' button to move the slope line to the right.
Click on the arrow symbol in the right side on 'Horizontal movement' button to move the slope line to the left.
								
Click on the arrow symbol in the left side on 'Vertical movement' button to move the slope line to the upwards direction.
Click on the arrow symbol in the right side on 'Vertical movement' button to move the slope line to the downwards direction.
							 
18. From those point coordinates calculate positive slope acceleration using formula (velocity difference/ time difference).
    
19. Similarly follow steps 16-18 to calculate negative slope acceleration from an assumed negative-sloped linear segment in velocity vs. time plot.

20. Under 'Calculation' tab select 'Gain Calculation'. Enter the acceleration values from positive slope and negative slope of velocity vs. time plot. Click on 'Simulate' button.

 					
  
