# Theory

 **Rectilinear Motion:**
				  
Rectilinear motion is another name of straight-line motion. This type of motion describes the movement of a particle or a body.
A body is said to experience rectilinear motion if any two particles of the body travel the same distance along two parallel straight lines.
The fig 1 illustrates rectilinear motion for a body.
						   
<div align = "center">
<img alt="" src="./images/rectibody.png" class="img-fluid">
	
<b>Fig. 1. Rectilinear Motion</b>
</div>
							
The experimental control system in practical laboratory is comprised of the electromechanical plant which consists of the spring-mass mechanism, its actuator and sensors and a subsystem 
i.e. an operating program or software which runs on a PC.

<b>Encoder:</b>

An encoder is a sensor that converts a positional output into an electronic signal. In this experiment, encoder counts are used as the system units of position, where the counts correspond to the encoder pulses and controller-internal register values. Here, 1 encoder revolution is equivalent to 16,000 encoder counts, which corresponds to 7.06 cm.
								
                                                            
**Rectilinear Motion Setup in Control Systems:**

<div align = "center">
<img alt="" src="./images/plant.png" class="img-fluid">
	
<b>Fig. 2. Rectilinear Motion Setup without dashpot connected</b>
</div>
<div align="center">
<img alt="" src="./images/plant2.png" class="img-fluid"><br/>
	
<b>Fig. 3. Rectilinear Motion Setup with dashpot connected</b>

<img alt="" src="./images/tfequation.png" style="width:100%">
</div>

Re arranging the equation (2) and comparing the denominator terms with the characteristics equation of a second order control system we get,

$$s^2 + 2 \zeta \omega_n s + \omega_n^2 = s^2 + \frac{c}{m}s + \frac{k}{m} \tag{3}$$
								
$$\omega_n^{2} = \frac{k}{m} \tag{4}$$

$$\zeta = \frac{c}{2 \sqrt{k m}} \tag{5}$$

$$\omega_d = \omega_n \sqrt{(1 - \zeta^{2})} \tag{6}$$
								
Where,
								
<i style ="font-family:'Bodoni MT';font-size:20px;">m</i> = Total mass (mass of the cart + weights)								

<i style ="font-family:'Bodoni MT';font-size:20px;">k</i> = Spring constant

<i style ="font-family:'Bodoni MT';font-size:20px;">c</i> = Damping coefficient

<span style ="font-family:'Bodoni MT';font-size:20px;">&zeta;</span> = Damping ratio

<span style ="font-family:'Bodoni MT';font-size:20px;"><i>F</i>(t)</span> = Applied force

<span style ="font-family:'Bodoni MT';font-size:20px;"><i>x</i>(t) </span> = Time varying position of the cart

<i style ="font-family:'Bodoni MT';font-size:20px;">&omega;<sub>n</sub></i> = Natural frequency of oscillations

<i style ="font-family:'Bodoni MT';font-size:20px;">&omega;<sub>d</sub></i> = Damped natural frequency of oscillations

	
<div align = "center">
<img alt="" src="./images/plot.png" class="img-fluid">
	
<b>Fig. 4. Open loop step plot for 1 kg mass on Mass Spring Damper system without connecting the dashpot</b>
</div>

<div align = "center">
<img alt="" src="./images/tpic.png" class="img-fluid">
	
<b>Fig. 5. Rectilinear Plant</b>
</div>

								
The hardware gain, <i style ="font-family:'Bodoni MT';font-size:20px;">k<sub>hw</sub></i>,  of the system is comprised of the product: 

$$k_{hw} = k_c \ k_a \ k_t \ k_{mp} \ k_e \ k_{ep} \tag{7}$$

where the theoretical values are:

<i style ="font-family:'Bodoni MT';font-size:20px;">k<sub>c</sub></i>, the DAC gain, = 10V / 32,768 DAC counts

<i style ="font-family:'Bodoni MT';font-size:20px;">k<sub>a</sub></i>, the Servo Amp gain, = approx 2 (amp/V)

<i style ="font-family:'Bodoni MT';font-size:20px;">k<sub>t</sub></i>, the Servo Motor Torque constant =  approx 0.1 (N-m/amp)

<i style ="font-family:'Bodoni MT';font-size:20px;">k<sub>mp</sub></i>, the Motor Pinion pitch radius inverse = 26.25 m<sup>-1</sup>

<i style ="font-family:'Bodoni MT';font-size:20px;">k<sub>e</sub></i>, the Encoder gain, = 16,000 pulses / 2&#960; radians

<i style ="font-family:'Bodoni MT';font-size:20px;">k<sub>ep</sub></i>, the Encoder Pinion pitch radius inverse = 89 m<sup>-1</sup>


						
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>								
