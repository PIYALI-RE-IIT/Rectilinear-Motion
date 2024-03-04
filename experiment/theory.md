# Theory

**Rectilinear Motion:**

Rectilinear motion is another name of straight-line motion. This type of motion describes the movement of a particle or a body. A body is said to experience rectilinear motion if any two particles of the body travel the same distance along two parallel straight lines. The figure below illustrates rectilinear motion for a body.

<div align = "center">
<img alt="" src="./images/rectibody.png" class="img-fluid">

<b>Fig 1: Rectilinear Motion</b>
</div>

The experimental control system in practical laboratory is comprised of the electromechanical plant which consists of the spring-mass mechanism, its actuator and sensors and a subsystem 
i.e. an operating program or software which runs on a PC .

**Encoder:**

An encoder is a sensor that converts a positional output into an electronic signal. In this experiment, encoder counts are used as the system units of position, where the counts correspond to the encoder pulses and controller-internal register values. Here, 1 encoder revolution is equivalent to 16,000 encoder counts, which corresponds to 7.06 cm.

**Rectilinear Motion setup in Control Systems:**

<div align = "center">
<img alt="" src="./images/plant.png" class="img-fluid">

<b>Fig 2: Rectilinear Motion setup without dashpot connected</b>

<img alt="" src="./images/plant2.png" class="img-fluid">

<b>Fig 3: Rectilinear Motion setup with dashpot connected</b>

<img alt="" src="./images/tfequation.png" class="img-fluid">

</div>

Re arranging the equation (2) and comparing the denominator terms with the characteristics equation of a
second order control system we get,

$$s^2 + 2 \zeta \omega_n s + \omega_n^2 = s^2 + \frac{c}{m}s + \frac{k}{m}$$

$$\omega_n^{2} = \frac{k}{m}$$

$$\zeta (damping \ ratio) = \frac{c}{2 \sqrt{k m}}$$

$$\omega_d = \omega_n \sqrt{(1 - \zeta^{2})}$$

Where,

<i style ="font-family:'Times New Roman'"><b>m</b></i> = Total mass ( mass of the cart + weights )

<!--M<sub>c</sub> = Mass of the cart<br/>-->
<i style ="font-family:'Times New Roman'"><b>k</b></i> = Spring constant

<i style ="font-family:'Times New Roman'"><b>c</b></i> = Damping coefficient

<i style ="font-family:'Times New Roman'"><b>F (t)</b></i> = Applied force

<i style ="font-family:'Times New Roman'"><b>x(t)</b></i> = Time varying position of the cart

<i style ="font-family:'Times New Roman'"><b>&omega;<sub>n</sub></b></i> = Natural frequency of oscillations

<i style ="font-family:'Times New Roman'"><b>&omega;<sub>d</sub></b></i> = Damped natural frequency of oscillations

<div align = "center">
<img alt="" src="./images/plot.png" class="img-fluid">

<b>Fig 4: Open loop step plot for 1 kg mass on Mass Spring Damper system without connecting the dashpot</b>
</div><br/>

<div align = "center">
<img alt="" src="./images/tpic.png" class="img-fluid">

<b>Fig 5: Rectilinear Plant</b>
</div>

The hardware gain, k<sub>hw</sub>,  of the system is comprised of the product: 

k<sub>hw</sub> = k<sub>c</sub> k<sub>a</sub> k<sub>t</sub> k<sub>mp</sub> k<sub>e</sub> k<sub>ep</sub> <!--k<sub>s</sub>--> 

where the theoretical values are:

k<sub>c</sub>, the DAC gain, = 10V / 32,768 DAC counts

k<sub>a</sub>, the Servo Amp gain, = approx 2 ( amp/V )

k<sub>t</sub>, the Servo Motor Torque constant =  approx 0.1 ( N-m/amp )

k<sub>mp</sub>, the Motor Pinion pitch radius inverse = 26.25 m<sup>-1</sup>

k<sub>e</sub>, the Encoder gain, = 16,000 pulses / 2&#960; radians

k<sub>ep</sub>, the Encoder Pinion pitch radius inverse = 89 m<sup>-1</sup>

<!--k<sub>s</sub>, the Controller Software gain, = 32-->                          
						
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>								