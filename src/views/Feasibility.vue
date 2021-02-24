<template>
    <div>
        <sidenav :navs="mynav" class="sidenav"> </sidenav>
        <div class='bgpic'>
        </div>
        <div class="mainpart">
            <section class="env">
                 <a class="anchor" name="环境可行性" id="环境可行性"></a>
                <div class="headline">环境可行性</div>
                <div class="subhead">生物安全</div>
                <p class="content">（1）工程菌的生物安全可控</p>
                <p class="content">对工程菌可能存在的泄露风险，我们使用了温控自杀开关和紫外自杀开关的双重保障来确保工程菌在自然条件下是无法存活的。紫外自杀开关利用TEV在紫外线条件下和UVR-8，COP1转运蛋白偶联的特性，可以在自然光照条件下完成对工程菌DNA的降解；温控自杀开关利用λpL/pR-cI857系统进行控制，该系统在高于30℃时，阻遏蛋白cI857失效会开启下游抗毒素RelB的表达，在自然低温下，抗毒素不表达进而诱导细菌死亡。</p>
                <p class="content">（2）喷洒出的绿僵菌的生物安全可控</p>
                <p class="content">而本装置喷洒的绿僵菌（Metarhizium）是广谱的昆虫病原菌，能寄生金龟甲、蝗虫、金针虫和半翅目蝽象等。可诱发昆虫产生绿僵病，在种群内形成重复侵染。利用金龟子绿僵菌来防治害虫已成为生物防治害虫的主要手段之一，绿僵菌对人畜无害，对天敌昆虫安全，不污染环境。</p>
                <p class="content">（3）无细胞系统具备生物安全优势</p>
                <p class="content">检测装置主要采用的是无细胞系统，不存在泄露的风险。而制备蛋白过程中所采用的试剂与方法对环境影响小。</p>
                <div class="subhead">环境安全</div>
                <p class="content">（1）愈创木酚作为酒、饮料、药物、化妆品的成分或添加剂，较为安全，聚集装置释放的少量愈创木酚不会对空气造成污染</p>
                <p class="content">（2）整个检测装置的无细胞系统部分在密闭容器中进行，液体不会与自然接触，且其中的成分对环境无害。仅采用空气通入检测方式，排出气体也无有害成分，基本不会造成空气污染、水污染等问题。</p>
                <p class="content">（3）无论是我们的小型喷洒装置还是检测装置，其应用于农田等空旷场所，并且我们致力于减少设备噪音，以减小对于周围居民的影响。</p>
            </section>
            <section class='economy'>
                 <a class="anchor" name="经济可行性" id="经济可行性"></a>
                <div class="headline">经济可行性</div>
                <div class="subhead">检测部分</div>
                <p class="content">无细胞检测系统的制备成本相对较高，但整个装置所需要的成本相对低于蝗虫物联网监测设备等现有监控技术。现有的对蝗虫种群密度进行监控的系统多采用遥感系统，通过无人机或卫星以及红外线、图像识别技术对蝗虫进行自动化、智能化监测，但这样的方法往往仅适用于蝗虫大规模孳生的区域和监控设施视野相对开阔的区域，在蝗群成型时监控其迁徙动向，成本较高，而对于种群密度较低时的蝗虫数量尚无较好的统计方法。</p>
                <div class="subhead">聚集装置</div>
                <p class="content">使用廉价的原料产生能聚集蝗虫的信息素，与传统聚集装置相比，高效低成本地聚集蝗虫，大大便利了对蝗虫的捕杀过程。</p>
                <div class="subhead">灭杀优势</div>
                <p class="content">相比于当前的化学农药防治、物理机械防治蝗虫，采用生物方法如绿僵菌等有独特的优势，绿僵菌油悬浮剂作为一种广泛应用的的蝗虫灭杀方法，可诱发昆虫产生绿僵病，在种群内形成重复侵染，操作简便，效果持久，寄主专一，具有良好的灭杀效果[1]，并且不存在化学农药防治造成的环境生态污染、蝗虫抗药性增强、威胁人畜安全及物理防治的噪音污染、不能大量杀死昆虫等问题。</p>
            </section>
            <section class="tech">
                 <a class="anchor" name="技术可行性" id="技术可行性"></a>
                <div class="headline">技术可行性</div>
                <div class="subhead">聚集灭杀部分</div>
                <p class="content">（1）所需的香草酸脱羧酶基因是已知的，香草酸-O-脱甲基化酶或其阻遏蛋白在其他一些物种中有明确的研究，并且枯草芽孢杆菌已完成全基因组测序，我们可以克隆获得这些基因。并且igem可以提供我们调控部分和自杀开关部分元件，我们仅需要对其做简单的修改；</p>
                <p class="content">（2）采用金门模块化克隆构建香草酸脱羧酶过表达质粒、自杀开关质粒；</p>
                <p class="content">（3）基于Red同源重组法或CRISPR/Cas9对VanAB进行基因敲除或过表达VanR；</p>
                <p class="content">（4）根据蛋白质的融合标签及分子量的不同，通过Western blot检测目的蛋白的表达；</p>
                <p class="content">（5）培养液及空气中愈创木酚产生鉴定——气相色谱-质谱法[2]；
                HS-SPME-GC-MS；线性范围为0.1-50 μg/L，定量限为0.152 μg/L；</p>
                <p class="content">（6）农田中蝗虫诱捕或灭杀效果实验。</p>
                <div class="subhead">检测部分</div>
                <p class="content">VOC传感器具有已经成型的装置设计以供参考。</p>
                <p class="content">（1）气体环流系统能增加4VA与受体接触的概率</p>
                <div class="fig1">
                <img src="../assets/Feasibility1.png" alt="" class="Feasibility">
                <p class="figtitle">
                    <strong>
                        <b>Fig 1 粒子图像测速技术(PIV)来分析粒子流动速率</b>
                    </strong>
                </p>
                </div>
                <div class="fig1">
                <img src="../assets/Feasibility2.png" alt="" class="Feasibility">
                <p class="figtitle">
                    <strong>
                        <b>Fig 2 粒子速度分布与气体流量有关</b>
                    </strong>
                </p>
                </div>
                <p class="content">使用粒子图像测速技术(PIV)来分析粒子流动速率，结果表明粒子速度分布与气体流量有关;随着气体流量的增加，粒子速率增加，更高的气体流量提供了更有力的液滴混合。图1B-E阻滞剂（6-O-sulfo）与αHL纳米孔之间的结合作用引起了向下的尖峰电流信号，电流恢复到初始水平则是解离作用引起的。与没有气体流动的频率相比，信号的频率随N2气体流动而增加(图2F、G)</p>
                <p class="content">（2）使用重组的无细胞翻译系统（purefrex2.0），OR35及其共受体LmigOrco基因序列已知（OR35：Gene ID: 100037437；LmigOrco GenBank: JN989549.1），将OR35和LmigOrco的DNA (OR35：LmigOrco=1：3，总DNA:2μg)加入翻译系统，构建受体，已有成熟的操作方法。</p>
                <p class="content">（在无细胞翻译系统中加入50μl 脂质体，形成蛋白脂质体，在25℃下培养2小时。随后，蛋白脂质体在15,000转/分钟20 ℃下离心10分钟。使用Amicon Ultra 100K对上清液进行离心以进行缓冲液交。样品在7% (w/w)蔗糖缓冲液中再悬浮[5mm Hepes/KOH (ph7.6)中，加入0.8 mM CaCl2、96mm NaCl、2mm KCl 和5mm MgCl2]。然后将样品分层到15%蔗糖缓冲液上，并在10℃下以163000g超速离心2小时。收集管顶部含有膜组分的带，并使用ÄKTA净化器系统通过Superdex 200柱。使用定量测定DOPC含量的LabAssay磷脂试剂盒估计含有蛋白质脂质体的部分中的脂质总量。离子通道电化学记录时，将脂质浓度稀释至3μg/ml。最后，采用12.5% SDS-PAGE 凝胶电泳分离样品，经 oriole 荧光凝胶染色，确定脂质体中 OR-Orco 的存在。纯化后的蛋白质浓度用 BSA 标准曲线估计。）</p>
                <p class="content">（3）蛋白检测——Western blot1、SDS-PAGE凝胶电泳</p>
                 <a class="anchor" name="参考文献" id="参考文献"></a>
                <div class="headline">参考文献</div>
                <div class="reference">[1]R.E. Price, R.P. Bateman, H.D. Brown, et al. Aerial spray trials against brown locust ( Locustana pardalina , Walker) nymphs in South Africa using oil-based formulations of Metarhizium flavoviride. 1997, 16(4):345-351.<br>
                [2]邓春波,林海珠,李军.气相色谱-质谱法检测饮料中的愈创木酚[J].食品安全质量检测学报,2019,10(15):4967-4971.<br>
                [3]Yamada T, Sugiura H, Mimura H, Kamiya K, Osaki T, Takeuchi S. Highly sensitive VOC detectors using insect olfactory receptors reconstituted into lipid bilayers. Sci Adv. 2021;7(3):eabd2013. doi:10.1126/sciadv.abd2013<br>
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
     background: url(../assets/HomeBg.jpeg) no-repeat;
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
                    name:"环境可行性",
                    id:"环境可行性"
                 },
                 {
                     name:"经济可行性",
                     id:"经济可行性"
                 },
                 {
                     name:"技术可行性",
                     id:"技术可行性"
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