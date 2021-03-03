<template>
  <div>
     <sidenav :navs="mynav" class="sidenav"> </sidenav>
    <div class='bgpic'>
    </div>
     <div class="mainpart">
       <section class="indroduction">
        <a class="anchor" name="绪论" id="indroduction"></a>
         <div class="headline">绪论</div>
         <p class="content">硬件根据实验方案主要分为两个部分，第一是检测系统，第二部分是聚集灭杀。在两部分之间的联动主要由检测的信号处理来完成。下图为硬件处理流程：</p>
         <div class="fig1">
        <img src="../assets/Hardwarefig1.png" alt="" class="biodesign">
        <p class="figtitle">
            <strong>
                <b>图1: 硬件处理流程</b>
            </strong>
        </p>
        </div>
       </section>
       <section class="detection">
        <a class="anchor" name="检测" id="detection"></a>
         <div class="headline">检测</div>
         <p class="content">检测部分的前处理主要由气泵与洗气瓶组成，气泵收集气体后通过洗气瓶处理最终将去除了干扰信息素的气体收集到检测系统中。（气泵与洗气瓶均可由淘宝购得）</p>
         <p class="content">根据湿队设计的无细胞系统实验方案，现设计硬件模型如下，该硬件由16个独立检测槽与集中气体循环系统组成。需检测气体通过上下两侧的气孔注入到整个检测系统中，经由导气槽通入各个单独的检测槽底部，经过溶解后在水溶液中与无细胞系统反应，造成离子通道开放，将化学信号转为电信号。</p>
         <p class="content">其中，气体循环底版可由激光蚀刻机雕刻亚克力板制成，通气槽部分由小功率蚀刻形成的槽制成，将两块亚克力板相接之后可以形成如图的通气装置；而独立通气槽可由下图切片后3D打印制成，或者改为方形用亚克力蚀刻（激光切割机切割圆形使用正多边形逼近，会造成漏气）。</p>
          <div class="fig1">
        <img src="../assets/Hardwarefig2.png" alt="" class="biodesign">
        <p class="figtitle">
            <strong>
                <b>图1: 检测系统图（见文件“检测系统”）</b>
            </strong>
        </p>
        </div>
       </section>
       <section class="signalprocess">
        <a class="anchor" name="信号处理" id="SignalProcess"></a>
         <div class="headline">
           信号处理
         </div>
         <p class="content">信号处理过程，下图为检测槽内部结构，中央检测壁使用涂有疏水层的细针结构，见图D，涂有疏水层之后会使液滴悬浮于细针表面，空出气体通道从而给予更多的气液接触面积。检测槽中央挡板均由这种结构组成（该细针结构可从淘宝购得）。溶液中的信息素与离子通道反应后会造成两侧产生离子浓度差，从而给测量电位制造了条件，接下来将详细描述电位测量过程以及信号处理。</p>
          <div class="fig1">
        <img src="../assets/Hardwarefig3.png" alt="" class="biodesign">
        <p class="figtitle">
            <strong>
                <b>图2: 检测槽结构</b>
            </strong>
        </p>
        </div>
        <p class="content">本装置的参考原文 中使用了膜片钳技术以及相应放大电路进行电位测量以及后续处理。膜片钳技术（如图3）通过将细胞膜轻轻吸附到玻璃微吸管中，不刺破细胞膜，在二者之间形成 10 ~ 100 GΩ 的封接阻抗，被孤立的小膜片面积为微米量级。孤立出来的小膜片上产生的电流经导出以及放大电路后既可以进行后续的处理。但是该种方式会对细胞造成一定的损伤，同时这种方式要在细胞和玻璃微管之间形成至少为兆欧级别的封接阻抗，需要精确的定位来保证细胞膜与玻璃微管“恰好”接触，这种脆弱的接触方式限制了胞内记录实验时间的长短，时间必须控制在 2 ~ 3 小时内，同时整个过程需要视觉辅助来完成，这对设备操作人员提出了很高的技术要求。囿于本组实验需要自动化以及连续检测的限制，现将膜片钳技术改为以光寻址电位传感器 (Light-addressable Potentiometric Sensor, LAPS)为二级转换单元的监测芯片，配合以LabVIEW为上位机的程序采集系统进行数据采集、存储。</p>
         <div class="fig1">
        <img src="../assets/Hardwarefig4.png" alt="" class="biodesign">
        <p class="figtitle">
            <strong>
                <b>图3: 膜片钳技术</b>
            </strong>
        </p>
        </div>
        <p class="content">2008 年，浙江大学王平课题组徐莹设计了一种集成芯片，在同一个片子上制备 MEA ，ECIS 及 LAPS 三个单元，用于采集不同种类的细胞电信号,如图4。</p>
        <p class="content">LAPS的基本原理为半导体内的光电效应。当半导体收到一定波长光照射时会吸收光子产生跃迁，从而在半导体内形成电子空穴。一般情况下电子空穴会很快恢复，外电路中没有电流，但是在N型硅加负压，P型硅加正压后会在半导体内产生耗尽层，耗尽层的电子空穴被拉开。使用调制光照射芯片正面或背面，可以获得不同大小的光生电流，而这种电流大小在光强确定的情况下只与耗尽层厚度（在外偏压等一定的情况下仅与界面电位影响相关）相关。</p>
        <p class="content">当检测系统离子通道打开并使得溶液离子浓度改变的时候，这种改变的电位会通过电解液耦合在LAPS表面并通过光生电流表现出来。将光生电流经过工作电极传输到检测设备放大后即可进行下一步的数据处理。</p>
        <div class="fig1">
        <img src="../assets/Hardwarefig5.png" alt="" class="biodesign">
        <p class="figtitle">
            <strong>
                <b>图4: LAPS结构</b>
            </strong>
        </p>
        </div>
        <p class="content">考虑到，经由LAPS芯片输出的信号需要确保一下几点：</p>
        <p class="content">1、输入阻抗大，确保芯片信号幅值</p>
        <p class="content">2、放大电路需要尽可能保证较小的相位延迟，减少信号畸变</p>
        <p class="content">3、前置放大电路需要滤波，出去无效信号的同时尽可能减小对有效信号的衰减。</p>
        <p class="content">综上，整个数据采集系统的结构如下：</p>
        <div class="fig1">
        <img src="../assets/Hardwarefig6.png" alt="" class="biodesign">
        <p class="figtitle">
            <strong>
                <b>图5: 硬件采集系统</b>
            </strong>
        </p>
        </div>
        <p class="content">咨询过浙江大学光电系舒晓武教授后决定采用ADA4528-1 芯片作为放大芯片：</p>
        <div class="fig1">
        <img src="../assets/Hardwarefig7.png" alt="" class="biodesign">
        <p class="figtitle">
            <strong>
                <b>图6: ADA4528-1芯片参数</b>
            </strong>
        </p>
        </div>
        <p class="content">该芯片内置硬件结构如下：</p>
        <div class="fig1">
        <img src="../assets/Hardwarefig8.png" alt="" class="biodesign">
        <p class="figtitle">
            <strong>
                <b>图7: ADA4528-1芯片内置硬件结构</b>
            </strong>
        </p>
        </div>
        <p class="content">后续硬件使用16位的PCI6035等数据采集卡进行前滤波放大后的数据采集。目前的大部分研究使用的一般是以计算机上的LabVIEW为上位机的数据采集以及后续使用matlab等的处理。但是，考虑到本组实验需要应用于田间，数据采集以及处理系统需要做到离线以及自动化采集，所以考虑使用树莓派作为开发平台移植LabVIEW等软件。</p>
        <p class="content">由于我自己手边只有一两块3B，并且树莓派没有AI和AO口。查阅资料得到的解决方案是使用一张STM32F103卡的AI做数据采集的前端，通过SMT32的SPI接口和树莓派的SPI接口相连，采集到的数据不做处理直接送到树莓派，此处STM32F103作为SPI的Slave端。我自己没有Nucleo F103(原解决方案中的博主使用)之类的卡，所以只能用3B勉强试试看。由于就一张光光的3B所以最终在树莓派上面跑起来如下图：</p>
         <div class="fig1">
        <img src="../assets/Hardwarefig9.png" alt="" class="biodesign">
        <p class="figtitle">
            <strong>
                <b>图8: 在树莓派上运行LabVIEW</b>
            </strong>
        </p>
        </div>
        <p class="content">LabVIEW处理后所得文件为TDMS文件，不能用Matlab直接打开，需要先用Convert.m进行读入，然后进行降噪。最MATLAB镜像仅支持树莓派4，所以没有在树莓派上进行matlab移植，经由LabVIEW得到的数据在MATLAB中用建模同学的算法进行高斯滤波后得到最终结果。具体流程如下：</p>
         <div class="fig1">
        <img src="../assets/Hardwarefig10.png" alt="" class="biodesign">
        <p class="figtitle">
            <strong>
                <b>图9: 滤波流程</b>
            </strong>
        </p>
        </div>
       </section>
       <section class="cooperation">
        <a class="anchor" name="检测及聚集灭杀" id="cooperation"></a>
         <div class="headline">检测及聚集灭杀联动</div>
         <p class="content">经由MATLAB处理过的数据如果判断超过阈值后将出发培养聚集信息素信号，具体步骤如下：</p>
         <div class="fig1">
        <img src="../assets/Hardwarefig11.png" alt="" class="biodesign">
        <p class="figtitle">
            <strong>
                <b>图10：数据处理信号联动</b>
            </strong>
        </p>
        </div>
         <p class="content">图10：数据处理信号联动
	MATLAB在获得超出阈值信号后会输出一个txt文本，以“1”代表超出，“0”代表未超出。树莓派会循环读取文件数据，当收到“1”即触发信号后，会通过蓝牙向Arduino输出亮灯（开始培养）信号，Arduino通过HC-05蓝牙模块接受来自树莓派的信号并做出亮灯响应。</p>
         <p class="content">绿灯为可以释放聚集蝗虫信息素的工程菌的开始培养信号，从检测的化学信号转化为电信号，经处理后再通过绿灯输出为生物信号，即完成了一次检测到聚集的信号联动。
①经由MATLAB进行如下判断并将信号写入信号文件</p>
         <div class="fig1">
        <img src="../assets/Hardwarefig12.png" alt="" class="biodesign">
        <p class="figtitle">
            <strong>
                <b>图11：写入信号文件</b>
            </strong>
        </p>
        </div>
        <p class="content">②树莓派读取信号文件中的信号并向Arduino发送指令</p>
         <div class="fig1">
        <img src="../assets/Hardwarefig13.png" alt="" class="biodesign">
        <p class="figtitle">
            <strong>
                <b>图12：读取信号并向Arduino发送信号</b>
            </strong>
        </p>
        </div>
        <p class="content">③Arduino控制亮灯</p>
         <div class="fig1">
        <img src="../assets/Hardwarefig14.png" alt="" class="biodesign">
        <p class="figtitle">
            <strong>
                <b>图13：Arduino控制亮灯</b>
            </strong>
        </p>
        </div>
       </section>
       <section class="seeandkiil">
        <a class="anchor" name="蝗虫识别与灭杀" id="seeandkill"></a>
         <div class="headline">蝗虫识别与灭杀</div>
         <p class="content">聚集与灭杀装置设计如下图，左侧为聚集装置，抽屉为培养基，可以取出进行更换，抽屉上部为绿灯，由前文提到的电路进行控制，经培养后的信息素从网格小窗扩散出来，将蝗虫聚集在右侧。右侧为灭杀装置，电控喷头连接药箱，在识别后确认可以进行灭杀则进行喷洒灭杀。</p>
        <div class="fig1">
        <img src="../assets/Hardwarefig15.jpg" alt="" class="biodesign">
        <p class="figtitle">
            <strong>
                <b>图14: 聚集灭杀装置</b>
            </strong>
        </p>
        </div>
        <p class="content">蝗虫的识别使用机器视觉的方式进行，当摄像头识别到聚集装置中存在蝗虫后将会启动电控阀门进行喷洒。（电控阀门使用Arduino控制类似如下图所示的喷头进行药物喷洒）。</p>
        <div class="fig1">
        <img src="../assets/Hardwarefig16.png" alt="" class="biodesign">
        <img src="../assets/Hardwarefig17.png" alt="" class="biodesign">
        <p class="figtitle">
            <strong>
                <b>图15: 电控喷头</b>
            </strong>
        </p>
        </div>
        <p class="content">类似于灯控制电路，摄像头接在树莓派上，经过算法识别匹配度大于某一阈值（比如80%）即发送信号控制Arduino喷洒农药。蝗虫的图像识别有两个途径，途径1为自己训练算法（还未全部完成），使得整套灭杀检测可以在离线的情况下运行，流程如下：</p>
         <div class="fig1">
        <img src="../assets/Hardwarefig18.png" alt="" class="biodesign">
        <p class="figtitle">
            <strong>
                <b>图16: 离线CV识别流程</b>
            </strong>
        </p>
        </div>
        <p class="content">途径2为在线使用百度等图像识别库并返回结果进行图像识别，流程如下：</p>
         <div class="fig1">
        <img src="../assets/Hardwarefig19.png" alt="" class="biodesign">
        <p class="figtitle">
            <strong>
                <b>图17: 途径2部分代码示例</b>
            </strong>
        </p>
        </div>
       </section>
        <a class="anchor" name="参考文献" id="reference"></a>
       <div class="headline">参考文献</div>
       <div class="reference">
        [1]Tetsuya Yamada, ProfileHirotaka Sugiura, Hisatoshi Mimura, ProfileKoki Kamiya, ProfileToshihisa Osaki, ProfileShoji Takeuchi. Highly sensitive VOC detectors using insect olfactory receptors reconstituted into lipid bilayers. Science Advances  13 Jan 2021:Vol. 7, no. 3, eabd2013 DOI: 10.1126/sciadv.abd2013<br>
        [2]Asakura K, Hayashi S, Ojima A, et al. Improvement of acquisition and analysis methods in multi-electrode array experiments with iPS cell-derived cardiomyocytes[J]. Journal of Pharmacological & Toxicological Methods,2015,13(4):1-10.
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
     background: url(../assets/hardwarebg.jpg) no-repeat;
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
              width:30rem
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
                  name:"绪论",
                  id:"indroduction"
                 },
                 {
                  name:"检测",
                  id:"detection"
                 },
                 {
                    name:"信号处理",
                    id:"SignalProcess"
                 },
                 {
                    name:"检测及聚集灭杀",
                    id:"cooperation"
                 },
                 {
                    name:"蝗虫识别与灭杀",
                    id:"seeandkill"
                 },
                 {
                    name:"参考文献",
                    id:"reference"
                 }

            ]
        }
    },
    components:{
        sidenav
    }
}
</script>