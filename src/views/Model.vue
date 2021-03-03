<template>
    <div>
        <sidenav :navs="mynav" class="sidenav"> </sidenav>
        <div class='bgpic'>
        </div>
        <div class="mainpart">
        <section class="Detection">
        <a class="anchor" name="Detection part" id="Detection-part"></a>
        <div class="headline">Detection part</div>
        <div class="subhead">Introduction</div>
        <p class="content">We use the OR-ORco system to detect the 4Va concentration in the collected air. This method detects the signal by specifically binding and opening ion channels with 4Va that penetrates into the solution and the insect’s olfactory receptors, resulting in a voltage difference.
        The detection device uses a gas flow system to input signal molecules. When the signal molecules are exchanged into the solution, they bind to the receptors on the device to generate signals. We believe that the binding reaction between the signal molecule and the receptor is irreversible and directly related to the concentration of the signal molecule in the solution. The relationship can be quantified by the standard curve method. Therefore, considering the change of the signal molecule exchanged by the gas flow system is the point of the model.</p>
        <div class="fig1">
        <img src="../assets/Model1.png" alt="" class="biodesign">
        <p class="figtitle">
            <strong>
                <b>Figure 1 gas flow part of detection device</b>
            </strong>
        </p>
        </div>
        <div class="subhead">Model Solving</div>
        <p class="content">Signal molecules are exchanged into the solution through holes when the gas flows, and only 4Va molecules are considered in this model. Therefore, a single-factor permeation model can be considered. We consider using the Noyes-Whitney equation to describe the permeation process, where the parameters of the diffusion layer are determined by the device, and the exchange concentration of gas molecules is mainly affected by the gas flow velocity and the concentration in the air influences.</p>
        <div class="content">Noyes-Whitney equation:</div>
        <div class="equations">
            <img src="../assets/equa1.png" alt="" class="equ1">
        </div>
        <p class="content">In this formula, dC/dt is the dissolution rate; kD is the dissolution rate constant; A is the surface area; Cs is the saturated solubility of the drug; Ct is the drug concentration.</p>
        <p class="content">The model equations are:</p>
        <div class="equations">
            <img src="../assets/equa2.png" alt="" class="equ2">
        </div>
        <p class="content">In addition to signal molecular input, the device also needs to be available for high-frequency use. The binding of the signal molecule to the receptor will desensitize over time, especially when the gas flow stops within a period of time, the device can be restored to the next usable state. We assume that the signal molecule and receptor have a fixed decomposition rate within a certain period of time, so that a new time function can be obtained</p>
        <div class="equations">
            <img src="../assets/equa3.png" alt="" class="equ3">
        </div>
        <p class="content">Where Co and Ci represent concentration of 4Va inside the tube and outside the tube respectively, Coa represent the adjusted Co which means considering the decomposition process between the 4Va and the OR system respectively.</p>
        <div class="content">We use Pycharm Python3.7 to solve the ordinary equations above. The parameters are determined from both others' works and our experiments and listed as follows.</div>
        <div class="table">
            <img src="../assets/table1.png" alt="" class='table1'>
            <br>
            <img src="../assets/table2.png" alt="" class='table2'>
        </div>
        <div class="subhead">Result</div>
        <p class="content">The simulated results in Figure 2 and 3 where Figure 2 is the curve of the signal strength in different concentration of 4Va, Figure 3 is the 2D-heat map which shows the mapping of the signal.</p>
        <div class="fig1">
        <img src="../assets/MR1.jpg" alt="" class="biodesign">
        <p class="figtitle">
            <strong>
                <b>Figure 2 the curve of the signal strength in different concentration of 4Va</b>
            </strong>
        </p>
        </div>
        <div class="fig1">
        <img src="../assets/MR2.jpg" alt="" class="biodesign">
        <p class="figtitle">
            <strong>
                <b>Figure 3 2D-heat map(X axis represents the time of gas flow, Y axis represents the concentration of 4Va, Value represents the signal mapping)</b>
            </strong>
        </p>
        </div>
        <p class="content">Figure 2 illustrates that the signal intensity gradually reaches its maximum value with the gas exchange and then decreases. 500X, 1000X represent the concentration in the pipe relative to the solution. The higher the gas concentration, the greater the signal strength.</p>
        <p class="content">We observe the influence of gas flow time on signal intensity at the same time in a continuous concentration gradient range, and get the heat map in Figure 3. Figure 3 reflects the distribution of signal intensity in a continuous concentration range, and the standard curve can be obtained from the heat map distribution at a certain point in time. It is worth noting that the increase in signal intensity within a certain period of time after the concentration changes from 500 X to 1000 X is not obvious. According to this heat map, we can artificially adjust the gas flow speed of the device to amplify the signal difference.</p>
        </section>
        <section class="Light">
            <a class="anchor" name="Light regulation part" id="regulation-part"></a>
            <div class="headline">Light regulation part</div>
            <div class="subhead">Introduction</div>
            <p class="content">Our team applicates the CarH system into the production of dsRNA. The goal is to Precisely control the release of signals. We then turn to investigate an alternative protein that might be better suited for real-time control.</p>
            <p class="content">Our regulatory part called CarH protein is controlled by green light. In the condition of light, CarH tetramers repress the expression of dsRNA. When we use only green light, the tetramers dissociate, thus activating the expression of dsRNA. However, without the light, there is not any product,dsRNA, in the system we designed in Saccharomvces cerevisiae. Saccharomvces cerevisiae enters the rapid growth phase. The mechanics are described in Figure 1.</p>
            <div class="fig1">
            <img src="../assets/LiRe1.jpg" alt="" class="biodesign">
            <p class="figtitle">
                <strong>
                    <b>Figure 1: the mechanism of different regulation. The expression of dsRNA is regulated both in the light and in the darkness.</b>
                </strong>
            </p>
            </div>
            <div class="subhead">Model Solving</div>
            <p class="content">CarH tetramer is a dimer of dimers. The tetramer is a repressor of the CarH promoter with ≈ 5th order cooperativity, whereas the individual monomers and dimers do not bind significantly. For simplicity, we consider that the tetramer accords with the Hill function of mRNA transcription. We think that CarH tetramer consists of four CarH monomer with VB12 through random collision. A photon of light is absorbed by cobalamin in the CarH light-sensing domain and changes its conformation. This reaction of disassociating the tetramer is light activating and irreversible, with the subsequently light-state inert CarH domains forming.</p>
            <p class="content">The model equations are:</p>
            <div class="equations">
            <img src="../assets/Sec1.png" alt="" class="Sec-equ1">
            </div>
            <div class="equations">
            <img src="../assets/Sec2.png" alt="" class="equ2">
            </div>
            <p class="content">Where r1 and r2 represent concentration of CarH RNA and dsRNA respectively, C1 and C4 represent concentration of CarH (Mono) and CarH (Ter) respectively.
            </p>
            <p class="content">We use Pycharm Python3.7 to solve the ordinary equations above. The parameters are determined from both others' works and our experiments and listed as follows.</p>
            <div class="table">
            <img src="../assets/Ltable1.png" alt="" class='table1'>
            <br>
            <img src="../assets/Ltable2.png" alt="" class='table2'>
        </div>
            <div class="subhead">Result</div>
            <p class="content">The simulated results in Figure 2 and 3 where Figure 2 is the curve of the concentration of intermediate products in the light, Figure 3 is the curve concentration of dsRNA in different gradient strength of green light.</p>
            <div class="fig1">
            <img src="../assets/LResult1.jpg" alt="" class="biodesign">
            <p class="figtitle">
            <strong>
                <b>Figure 2 Expression of intermediate product in the light</b>
            </strong>
        </p>
        </div>
        <div class="fig1">
            <img src="../assets/LResult2.jpg" alt="" class="biodesign">
            <p class="figtitle">
            <strong>
                <b>Figure 3 Expression of terminal product in the different strength of light</b>
            </strong>
        </p>
        </div>
        <p class="content">Figure 2 illustrates the rapid conversion of CarH tetramer into CarH monomer after turning on green light. The RNA in the conditions is provided in a limited amount, which is to simulate the limitation of the number of engineering bacteria. With the consumption of CarH RNA, the amount of CarH monomer is slowly degraded. In summary, the light control effect is good.</p>
        <p class="content">Figure 3 is our further idea of the light control effect. In a certain period of time, we hope to increase the light intensity to control the engineered bacteria to express more target proteins. We used 3μ, 4μ, and 5μ light intensity respectively. It can be seen from the results that the light intensity does not affect the production rate of the terminal product, but it is possible to synthesize more target products in a longer time through a limited number of engineered bacterial populations.</p>
        </section>
        <section class="homework">
            <a class="anchor" name="Homework" id="HW"></a>
            <div class="headline">Homework</div>
            <div class="subhead">Introduction</div>
            <p class="content">The designed circuit in cell A is under control of a temperature sensitive cI repressor. Upon raising the temperature, cI will dissociate from the promoter and the circuit is activated. This leads to the initiation of the production of LuxR and LuxI. LuxI will consecutively produce AHL, which binds with LuxR. The newly formed complex will then activate the production of leucine and Ag43. Leucine and AHL are also able to diffuse out of the cell into the medium. Ag43 is the adhesine which aids the aggregation of cells A, while leucine and AHL are necessary to repel cells B.</p>
            <p class="content">Generally speaking, this is a quorum sensing control switch activated by light induction. LuxI and LuxR are the molecules used in quorum sensing. Much protein transcription and translation are involved in the induction system.</p>
            <div class="fig1">
                <img src="../assets/ModelHW.png" alt="" class="biodesign">
                <p class="figtitle">
                    <strong>
                        <b>Figure 1 signal path</b>
                    </strong>
                </p>
                </div>
            <div class="subhead">Model Solving</div>
            <div class="fig1">
                <img src="../assets/ModelHW1.png" alt="" class="biodesign">
                <img src="../assets/ModelHW2.png" alt="" class="biodesign">
                <img src="../assets/ModelHW3.png" alt="" class="biodesign">
                <p class="figtitle">
                    <strong>
                        <b></b>
                    </strong>
                </p>
                </div>
            <div class="subhead">Result</div>
            <p class="content">For cell A we made a simulation with cell A in the ON and OFF mode as visuable in figure 2. When cell A is in the OFF state, the whole designed circuit is in OFF mode. This means that the cI repressor is succesful in repressing the design. If the degradation rate of cI is raised to simulate the temperature rising, we see that all the components of the system show a big increase. For LuxR this increase is only temporary, but this is also explainable. Since LuxI keeps on producing AHL which binds LuxR to form a complex. Indeed all the LuxR reacts to form the complex.</p>
            <div class="fig1">
                <img src="../assets/ModelHW4.png" alt="" class="biodesign">
                <p class="figtitle">
                    <strong>
                        <b>Figure 2 Result</b>
                    </strong>
                </p>
                </div>
        </section>
        <a class="anchor" name="Reference" id="Reference"></a>
        <div class="headline">参考文献</div>
        <div class="reference">
            [1]https://2019.igem.org/Team:Peking/Model#Regulatory<br> 
            [2]https://2020.igem.org/Team:CAU_China/ Model<br>
            [3]https://2019.igem.org/Team:Vilnius-Lithuania/Degradation_Rate_Control_Model<br>
        </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
     .sidenav{
    width:15%;
  }
    .bgpic{
     width: 100%;
     height: 100vh;
     background: url(../assets/modelbg.jpg) no-repeat;
     position: relative;
     background-attachment: fixed;
     background-position: center;
     background-size: 100% 100%;
    }
    .mainpart{
        margin: 0 15vw 5rem;
        width: 70vw;
        text-align: left;
        .anchor{
        position: relative;
        top: -44px; // 偏移值
        display: block;
        height: 0;
        overflow: hidden;
        }   
        .headline{
            font-size: 2rem;
            margin-bottom: 1vw;
            color: #00AAA5;
            padding-top: 5rem;
            font-weight: bolder;
            text-shadow: 0.2rem 0.2rem burlywood;
        }
        .content{
            color: #000;
            text-align: justify;
            font-size: 1.2rem!important;
            text-indent: 2.4rem;
            font-weight: normal;
            line-height: 2rem;
            margin-bottom: 0.8vw;
        }
        .subhead{
            color: #000;
            text-align: justify;
            font-size: 1.2rem!important;
            text-indent: 2.4rem;
            font-weight: bold;
            line-height: 2rem;
            margin-bottom: 0.8vw;
        }
        .reference{
            text-align: justify;
            color: #000;
            font-size: 1.2rem!important;
            font-weight: normal;
            line-height: 2rem;
            margin-bottom: 0.8vw;
            text-indent: 0 !important;
            
        }
        .fig1{
            text-indent: 0 !important;
            margin-bottom: 20px !important;
            text-align: center!important;
            text-indent: 0 !important;
            img{
                width:33rem
            }
        }
        .figtitle{
            color: #000;
            font-size: 1.2rem!important;
            margin-bottom: 35px;
            text-align: center !important;
            text-indent: 0 !important;
        }
        .equations{
            text-indent: 0 !important;
            // margin-bottom: 20px !important;
            text-align: center!important;
            text-indent: 0 !important;
            .equ1{
                width: 10rem;
                padding-right: 2rem;
            }
            .equ2{
                width:40rem;
            }
            .equ3{
                width:43rem;
            }
            .Sec-equ1{
                width: 40rem;
                padding-right: 0rem;
            }
        }
        .table{
            padding-top:20px;
            padding-bottom: 35px;
            text-indent: 0 !important;
            margin-bottom: 0 !important;
            text-align: center!important;
            img{
                margin: 0;
                padding: 0;
            }
        }
       
    }
</style>

<script>
import sidenav from '../components/Side_nav'
export default {
    data(){
        return{
            mynav:[
                {
                   name:"Detection",
                   id:"Detection-part"
                 },
                 {
                    name:"Light regulation",
                    id:"regulation-part"
                 },
                 {
                      name:"Homework",
                      id:"HW"
                 },
                 {
                     name:"Reference",
                     id:"Reference"
                 }
            ]
        }
    },
    components:{
        sidenav
    }
}
</script>