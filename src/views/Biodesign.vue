<template>
<div>
     <sidenav :navs="mynav" class="sidenav"> </sidenav>
     <div class='bgpic'>
    </div>
    <div class="mainpart">
    <section>
         <a class="anchor" name="概述" id="概述"></a>
        <div class="headline">概述</div>
        <p class="content">防“蝗”于未然这个项目是想在蝗虫聚集初期解决蝗灾的萌芽，我们将项目的内容分成两大板块：检测和聚集灭杀。检测依赖的是基于昆虫嗅觉受体的高灵敏度VOC检测器，能够通过蝗虫的信息素准确地确定农田中的蝗虫密度。而聚集部分则是由合成愈创木酚（guaiacol）的工程菌构成的，灭杀部分采用的是光响应的绿僵菌油剂喷洒设备。
        </p>
    </section>
    <section class="test">
         <a class="anchor" name="检测" id="检测"></a>
        <div class="headline">检测</div>
        <div class="subhead">概述</div>
        <p class="content">蝗虫在达到一定种群密度的时候，会由于后腿相互接触从散居型变化为群居型[1]，并且释放的群聚信息素会有浓度变化。我们打算采用最近发现的4VA[2]作为检测浓度变化的信息素。这种信息素的受体是OR35（GenBank: KP843355.1）并且在4-5个蝗虫聚集时就会开始释放。同时4VA的浓度会随着种群密度的增加而增加，可以对空气中的4VA进行量化并且测定出环境中蝗虫的种群密度。</p>
        <div class="subhead">前处理</div>
        <p class="content">采用真空泵收集一定量的空气后，由于蝗虫群聚信息素中还有其他响应OR35的有机气体分子，如Veratrole、Decanal、Octanal等，因此需要对这些气体进行前处理。</p>
        <p class="content">链霉菌中的Cytochrome P-450可以除去Veratrole[3]，故将链霉菌包埋在海藻酸钠微珠中制成除气装置。对于Decanal和Octanal则采取氧化的方法。</p>
        <div class="subhead">无细胞系统</div>
        <p class="content">测装置的主要部分是一个利用OR的无细胞检测系统，主要参考的是Tetsuya Yamada等[4]研发的硬件设备。将形成脂质双层的液滴放置在疏水微缝隙（作为气流通道）上，再通过气流环流系统将4VA以恒定速度反复通入通道并溶解在溶液中 。此外，气液之间的剪切应力在液滴中引起的对流促进了4VA向OR-ORco的传输。当OR感应到传输过来的4VA时，它串联的ORco（即离子通道）就会打开，在脂双层膜两侧形成电位差。然后检测电信号，计算得4VA的浓度。</p>
        <div class="fig1">
        <img src="../assets/Biodesign.png" alt="" class="biodesign">
        <p class="figtitle">
            <strong>
                <b>Fig 1 生物设计示意图</b>
            </strong>
        </p>
        </div>
        <div class="subhead">脂双层与OR受体的制备</div>
        <p class="content">作为传感受体，我们使用了OR35-LmigOrco，前者是特异性感应4VA的嗅觉受体，后者是形成配体门控离子通道的蝗虫嗅觉受体。OR-Orco的制备是利用重组的无细胞翻译系统，将OR-Orco转移到蛋白脂质体上，并通过凝胶电泳检测其存在。</p>
    </section>
    <section class="aggregatekill">
         <a class="anchor" name="聚集灭杀" id="聚集灭杀"></a>
        <div class="headline">聚集灭杀</div>
        <div class="subhead">概述</div>
        <p class="content">我们试图采用另外一种吸引蝗虫聚集的信息素来将蝗虫聚集在装置附近，从而使得灭杀能够顺利进行。愈创木酚具有符合我们要求的特性：剂量依赖性地聚集蝗虫[5]；目前已经知道合成途径[6]并且能够在底盘生物中合成；高浓度时对人类没有毒害作用。</p>
        <div class="subhead">底盘生物的选择</div>
        <p class="content">采用的枯草芽孢杆菌（Bacillus subtilis），是广泛分布在土壤及腐败的有机物的一种需氧型革兰氏阳性菌。其生长速度快，对营养要求比较低，能高效分泌许多蛋白及代谢产物，并且不会产生毒素，是一种无致病性的安全微生物。枯草芽孢杆菌的生长周期分为孢子休眠期、生殖生长期，其会在生长环境恶劣、营养物质缺乏等不适宜的环境下进入孢子休眠期。其产生的芽孢具有极强抗逆作用、在高温、强酸碱等极性环境下亦可生存，可以有效克服装置在不利环境条件下失效的可能。</p>
        <div class="subhead">愈创木酚的合成与代谢</div>
        <p class="content">我们打算采用枯草芽孢杆菌作为底盘生物合成愈创木酚，并且在培养液中加入愈创木酚的前体——香草酸。香草酸在香草酸脱羧酶的作用下能够转化为愈创木酚，枯草芽孢杆菌本身就能够实现这种功能[7]。但枯草芽孢杆菌中，香草酸还会在香草酸-O-脱甲基化酶的作用下转化成原茶儿酸[8]。所以要构建愈创木酚合成工程菌，需要过表达香草酸脱羧酶，并且抑制香草酸-O-脱甲基化酶。</p>
        <div class="subhead">香草酸脱羧酶的过表达</div>
        <p class="content">将CarH 系统和香草酸脱羧酶基因装载在过表达质粒上，并转入枯草芽孢杆菌。其中CarH 系统是光控开关，香草酸脱羧酶的基因由3个基因yclBCD （GI序列标识号：2632649、2632650、2632561）组成 。</p>
        <div class="subhead">香草酸-O-脱甲基化酶的抑制</div>
        <p class="content">我们设计了两种方法来抑制香草酸-O-脱甲基化酶:</p>
        <p class="content">（1）将香草酸-O-脱甲基化酶基因敲除。我们参考了用同源重组或其他方法敲除VanAB基因（香草酸/醛-O-脱甲基化酶基因）的方法[9]。</p>
        <p class="content">（2）过表达VanAB基因的阻遏蛋白VanR[10]，在需要产生愈创木酚时才大量表达VanR，避免组成性表达对菌株生长繁殖的影响。</p>
        <div class="subhead">光调控功能的实现</div>
        <p class="content">通过绿光照射激活香草酸脱羧酶的过表达，并产生愈创木酚。其中光调控功能由CarH系统实现[11]。由四个CarH蛋白组成的四聚体是CarH启动子的阻遏物，阻碍下游基因的表达。CarH蛋白的调节受绿灯控制，当环境中4-VA浓度达到阈值时，我们的检测系统将信息反馈给绿灯控制系统，绿灯开关打开。在绿光条件下，CarH四聚体解离，从而激活下游基因的表达，愈创木酚合成开启；在没有灯光的情况下，几乎不开启相关酶的转录。芽孢杆菌进入快速生长阶段。</p>
        <div class="subhead">灭杀</div>
        <p class="content">采用绿僵菌油剂喷洒设备。一旦空气中的4VA超标，电信号传输到设备中，设备就开始喷洒油剂。与此同时设备开始快速散发愈创木酚聚集蝗虫，蝗虫到达时能够沾染附近植株上已经被喷洒出来的绿僵菌，使得蝗虫感染，种群密度降低，从而解除蝗灾发生的可能性。
        </p>
    </section>
    <section class="biosafety">
         <a class="anchor" name="生物安全" id="生物安全"></a>
        <div class="headline">生物安全</div>
        <div class="content">由于工程菌可能存在泄露的风险，我们设计了温控自杀开关和紫外自杀开关两种自杀开关以确保其进入自然环境时开启凋亡。</div>
        <div class="subhead">紫外自杀开关</div>
        <div class="content">本开关参照了2020 Sorbonne_U_Paris项目[12]。核酸酶包含信号肽、TMD跨膜结构域、TEV识别位点、核酸内切酶；蛋白酶TEV则分为两部分，其C端与UVR-8连接，N端与COP1连接；UVR-8 / COP1蛋白复合物，UV会激发UVR-8 和COP1的二聚化，没有UV时它们分离。（Christie等，2012）、（Tilbrook等人，2016）。</div>
        <div class="content">核酸酶锚定在细胞膜上，UVR-8 / COP1蛋白复合物形成时，TEV蛋白酶被重构，具有针对特定TEV识别位点的蛋白酶活性，继而使核酸酶从膜中释放出来，降解基因组DNA使芽孢杆菌凋亡。</div>
        <div class="subhead">温控自杀开关</div>
        <div class="content">芽孢杆菌的最适生长温度约30-37摄氏度。λpL/pR-cI857 温控制系统统在高于 30 ℃时，阻遏蛋白 cI857 因热失活，并引起下游基因的表达[13]。所以我们采用该温度敏感性启动子，在我们的培养条件下（37摄氏度左右），该启动子诱导抗毒素RelB的产生，而毒素的产生是由常规的组成性表达启动子控制的。当释放到环境中，温度降低时，抗毒素不表达，细菌因过量的毒素RelE而死亡。</div>
         <a class="anchor" name="参考文献" id="参考文献"></a>
        <div class="headline">参考文献</div>
        <div class="reference">
            [1]Wang X, Kang L. Molecular mechanisms of phase change in locusts. Annu Rev Entomol. 2014;59:225-244. https://doi.org/10.1146/annurev-ento-011613-162019
            <br>
            [2]Guo, X., Yu, Q., Chen, D. et al. 4-Vinylanisole is an aggregation pheromone in locusts. Nature 584, 584–588 (2020). https://doi.org/10.1038/s41586-020-2610-4
            <br>
            [3]Sutherland, J.B., 1986. Demethylation of Veratrole by Cytochrome P-450 in Streptomyces setonii. Applied and Environmental Microbiology 52, 98–100.. https://doi.org/10.1128/aem.52.1.98-100.1986
            <br>
            [4]Yamada T, Sugiura H, Mimura H, Kamiya K, Osaki T, Takeuchi S. Highly sensitive VOC detectors using insect olfactory receptors reconstituted into lipid bilayers. Sci Adv. 2021;7(3):eabd2013. Published 2021 Jan 13. https://doi.org/10.1126/sciadv.abd2013
            <br>
            [5]Baldwyn Torto, Daniel Obeng-Ofori, Peter G. N. Njagi, et al. Aggregation pheromone system of adult gregarious desert locust schistocerca gregaria (forskal). 1994, 20(7):1749-1762
            <br>
            [6]樊璐璐,刘玉香,范晓军,袁进.木质素及其模型化合物生产愈创木酚的研究进展[J].现代化工,2021,41(01):49-52
            <br>
            [7]Crawford RL, Olson PP. Microbial catabolism of vanillate: decarboxylation to guaiacol. Appl Environ Microbiol. 1978;36(4):539-543. doi:10.1128/AEM.36.4.539-543.1978
            <br>
            [8]Gurujeyalakshmi, G., Mahadevan, A. Dissimilation of ferulic acid byBacillus subtilis . Current Microbiology 16, 69–73 (1987). https://doi.org/10.1007/BF01588174
            <br>
            [9] Priya Upadhyay, Nitesh K. Singh, Rasika Tupe, Annamma Odenath &
            Arvind Lali (2019): Biotransformation of corn bran derived ferulic acid to vanillic acid using engineered Pseudomonas putida KT2440, Preparative Biochemistry & Biotechnology, DOI:10.1080/10826068.2019.1697935
            <br>
            [10]Morawski B, Segura A, Ornston LN. Repression of Acinetobacter vanillate demethylase synthesis by VanR, a member of the GntR family of transcriptional regulators. FEMS Microbiol Lett. 2000; 187: 65‐ 8.
            <br>
            [11]https://2020.igem.org/Team:CAU_China/Model
            <br>
            [12]https://2020.igem.org/Team:Sorbonne_U_Paris
            <br>
            [13]Remaut E, Stanssens P, Fiers W. Plasmid vectors for high efficiency expression controlled by the promoter of coliphage lambda. Gene, 1981, 15(1): 81−93.
            <br>
        </div>
    </section>
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
     background: url(../assets/partsbg.jpg) no-repeat;
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
        }
        .figtitle{
            color: #000;
            font-size: 1.2rem!important;
            margin-bottom: 0.8vw;
            text-align: center !important;
            text-indent: 0 !important;
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
                    name:"概述",
                    id:"概述"
                },
                {
                    name:"检测",
                    id:"检测"
                },
                {
                    name:"聚集灭杀",
                    id:"聚集灭杀"
                },
                {
                    name:"生物安全",
                    id:"生物安全"
                },
                {
                    name:"参考文献",
                    id:"参考文献"
                }
            ]
        }
    },
    components:{
        sidenav
    }
}
</script>