### Procedure

**Plant Setup:**
								
<div align="center">
<img  src="./images/MSDplant.png" class="img-fluid">
</div>
								
<div align="center">
<img alt="" src="./images/MSDsimulationplant.png" class="img-fluid">

[Fig 2: Circuit diagram of experimental setup for Rectilinear Motion Control simulation]
</div>
								
**Steps to perform the simulation**
								
1. Drag weights (brown coloured boxes) and drop them in the blue coloured boxes in the mass carriage system (for ex. Drag the uppermost weight and put it in the lowermost blue box). Each of the weights are of 500g. First drag all the weights (i.e. select 2kg mass).
							  
2. Click on 'Trajectory' from command tab under 'Controls',then click on 'Step'. After that click on 'Setup', put step size to zero, set dwell time to 3000 ms and 2 repetition . Select 'Open loop step' and 'Ok' to observe open loop step response for 2kg mass.
							 
3. Click on "Setup Data Acquisition" under 'Data' tab, put 2 as the value of servo cycles and select 'Encoder Position'.

4. Drag the mass carriage system through the slider up to -2.5cm. 

5. Click on 'Execute' under 'command', then click on 'RUN' button. The system starts to oscillate.

6. After the carriage stops oscillating, an alert massage will be shown. Click on 'Ok'.

7. Click on 'Set up Plot' under 'Plotting'. Select 'Encoder Position' and click 'Ok'.

8.  Click on 'Plot data' under 'Plotting' ,the 'Open loop step' response for the particular mass chosen, will be shown.
							 
9. Click on 'Reset Controller' under 'Utility' tab to observe response for unloaded mass choosing no weights and following the steps 2 - 8.
							
10. Under 'Calculation' tab select 'Without Damper', enter both the mass values chosen ( for ex. here the first mass was 2kg and second one is 0kg ) and click on 'Simulate' button to have the values of M<sub>c</sub> (weight of the carriage) and K (spring constant).

11. Now click on 'Connect Dashpot' button to connect the dashpot to the mass carriage system.
							 
12. Similarly drag 2kg weight again and follow the above steps( 1 - 8 ) to observe open loop step response of the mass carriage system with connected dashpot.
							 
13. Under 'Calculation' tab select 'With Damper', enter the mass value chosen ( for ex. here the mass was 2kg ) and click on 'Simulate' button to have the value of C ( dashpot damping coefficient ).
							 
14. To observe system velocity first remove dashpot from the mass carriage system by clicking on 'Remove Dashpot' button. Now secure 2kg mass in the carriage.
							 
15. Steps will be same, as said before in steps ( 1-8 ) with some following edits. In step 2 set dwell Time to 75 ms and repetition 2 and in step 3 select 'Encoder Velocity'. 
							 
16. In step 7 Select 'Encoder Velocity' and click 'Ok'.
							 
17. Calculate acceleration (for both positive & negative slope) using formula (velocity difference/ time difference) from the velocity vs. time plot.
							 
18. Under 'Calculation' tab select 'Gain Calculation'. Enter the acceleration values from positive slope and negative slope of velocity vs. time plot. Click on 'Simulate' button.
 					
  