<script setup>
const message = 'Hi, my name is Mark Bran I am a web developer.'
const pinkCharactersList = [15, 16, 17, 18, 19, 20, 21, 22, 23]
const spaces = [3, 6, 11, 14, 19, 24, 26, 29, 31, 35]

const beforeEnter = (el) => {
  el.style.right = Math.random() * window.innerWidth + 'px'
  el.style.top = Math.random() * window.innerHeight - 70 + 'px'
  el.style.width = el.dataset.index % 3 === 0 ? '3px' : el.dataset.index % 2 === 0 ? '2px' : '1px'
  el.style.height = el.dataset.index % 3 === 0 ? '3px' : el.dataset.index % 2 === 0 ? '2px' : '1px'
}
</script>

<template>
  <section class="h-screen w-screen">
    <!-- Background stars -->
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>

    <!--Title -->
    <div id="title" class="absolute top-1/2 left-1/2 -translate-x-2/4 -mt-12 w-full px-12 text-white text-center font-extrabold">
      <div class="mb-12">
        <span
          v-for="(letter, index) in message.split('')"
          :key="letter"
          class="inline-block letter text-2xl md:text-4xl xl:text-5.5xl tracking-widest"
          :class="[spaces.includes(index) ? 'ml-3' : '', pinkCharactersList.includes(index) ? 'text-primary-pink' : 'text-white']"
        >
          {{ letter }}
        </span>
      </div>
      <RouterLink
        to="/projects"
        class="text-white font-bold text-xl rounded-lg border-2 px-6 lg:px-10 py-3 md:py-4 text-md md:text-xl tracking-widest ease-in-out duration-1000 hover:bg-dark-cyan-blue hover:border-dark-cyan-blue"
        >View my work</RouterLink
      >
    </div>
  </section>
</template>

<style scoped>
.letter:nth-child(odd) {
  transform: translateY(-700%);
  animation: fall 4s 1.9s ease-in forwards, rubber 1s 4s infinite;
}

.letter:nth-child(even) {
  transform: translateY(-700%);
  animation: fall 5s 2s ease-in forwards, shake 1s 5s infinite;
}

.letter:nth-child(3n) {
  transform: translateY(-700%);
  animation: fall 7s 1.6s ease-in forwards, shake 1s 7s infinite;
}

.letter:nth-child(4n) {
  transform: translateY(-700%);
  animation: fall 7s 1.2s ease-in forwards, rubber 1s 7s infinite;
}

.home-page-stars {
  animation: animStar 20s linear infinite;
}

.home-page-stars:nth-child(3n) {
  animation: starTwinkle 1s infinite linear;
}

@keyframes animStar {
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(30px);
  }
  50% {
    transform: translateY(50px);
  }
  75% {
    transform: translateY(30px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes starTwinkle {
  0% {
    background: rgba(255, 255, 255, 0.4);
  }
  25% {
    background: rgba(255, 255, 255, 0.8);
  }
  50% {
    background: rgba(255, 255, 255, 1);
  }
  75% {
    background: rgba(255, 255, 255, 0.8);
  }
  100% {
    background: rgba(255, 255, 255, 0.4);
  }
}

/*****FALL */

@keyframes fall {
  0% {
    opacity: 0;
  }
  35% {
    opacity: 1;
    transform: translateY(0%);
  }
  45% {
    transform: translateY(-30%);
  }
  60% {
    transform: translateY(0%);
  }
  75% {
    transform: translateY(-10%);
  }
  100% {
    transform: translateY(0%);
  }
}
/* ****************Animation*********/
@keyframes rubber {
  0% {
    transform: translateY(-100%);
    transform: scale3d(1, 1, 1);
  }
  35% {
    transform: scale3d(1.25, 0.75, 1);
  }
  45% {
    transform: scale3d(0.75, 1, 1);
  }
  60% {
    transform: scale3d(1.2, 0.8, 1);
  }
  75% {
    transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
}

@keyframes shake {
  0% {
    transform: translate(0px, 0px) rotate(0deg);
  }
  25% {
    transform: translate(1px, 1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, -1px) rotate(-1deg);
  }
  75% {
    transform: translate(2px, -1px) rotate(2deg);
  }
  100% {
    transform: translate(-1px, 1px) rotate(-1deg);
  }
}

/* route transitions */
.route-enter-from {
  opacity: 0;
  transform: translateX(-50%);
}

.route-enter-active {
  transition: all 0.5s ease-out;
  transition-delay: 1.6s;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(0%);
}

.route-leave-active {
  transition: all 0.3s ease-out;
}

#stars {
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 1253px 1998px #fff, 934px 1912px #fff, 405px 1367px #fff, 961px 592px #fff, 127px 1483px #fff, 1936px 1142px #fff, 908px 566px #fff,
    337px 1223px #fff, 2px 466px #fff, 1665px 981px #fff, 689px 1778px #fff, 1284px 1907px #fff, 651px 1977px #fff, 160px 367px #fff, 390px 877px #fff,
    1795px 634px #fff, 1262px 222px #fff, 1345px 874px #fff, 3px 1347px #fff, 782px 909px #fff, 1254px 98px #fff, 1589px 1035px #fff,
    1762px 1066px #fff, 772px 927px #fff, 1374px 771px #fff, 806px 587px #fff, 1792px 38px #fff, 1223px 561px #fff, 1225px 171px #fff,
    179px 1632px #fff, 1561px 1345px #fff, 767px 727px #fff, 1308px 228px #fff, 1149px 118px #fff, 1176px 1124px #fff, 1349px 783px #fff,
    1297px 1093px #fff, 1770px 747px #fff, 1961px 7px #fff, 1808px 315px #fff, 1959px 1565px #fff, 523px 803px #fff, 1915px 1418px #fff,
    1133px 1476px #fff, 1832px 925px #fff, 1097px 1942px #fff, 85px 1346px #fff, 787px 1719px #fff, 970px 1352px #fff, 1031px 746px #fff,
    1620px 1437px #fff, 226px 1568px #fff, 845px 881px #fff, 557px 1339px #fff, 1956px 100px #fff, 1390px 1901px #fff, 494px 518px #fff,
    830px 1419px #fff, 680px 197px #fff, 1464px 1631px #fff, 1341px 1000px #fff, 1135px 1960px #fff, 832px 516px #fff, 1248px 1936px #fff,
    1020px 1030px #fff, 1449px 550px #fff, 1425px 1059px #fff, 221px 1596px #fff, 1652px 91px #fff, 1617px 1417px #fff, 482px 527px #fff,
    718px 1436px #fff, 869px 1842px #fff, 1138px 1423px #fff, 1482px 1340px #fff, 1523px 627px #fff, 912px 1460px #fff, 847px 766px #fff,
    366px 573px #fff, 31px 1394px #fff, 1184px 1109px #fff, 438px 938px #fff, 577px 686px #fff, 434px 506px #fff, 895px 1470px #fff, 240px 226px #fff,
    974px 535px #fff, 196px 307px #fff, 683px 1038px #fff, 1462px 984px #fff, 1648px 717px #fff, 1104px 1097px #fff, 296px 1172px #fff,
    673px 376px #fff, 211px 784px #fff, 561px 1011px #fff, 856px 1921px #fff, 1459px 1577px #fff, 1933px 1006px #fff, 37px 239px #fff,
    1894px 1948px #fff, 1106px 769px #fff, 773px 1652px #fff, 262px 681px #fff, 861px 737px #fff, 890px 546px #fff, 141px 1237px #fff,
    917px 893px #fff, 1712px 546px #fff, 844px 301px #fff, 41px 579px #fff, 232px 722px #fff, 703px 187px #fff, 1458px 1081px #fff, 1106px 857px #fff,
    1573px 904px #fff, 1203px 1984px #fff, 1000px 1748px #fff, 1476px 649px #fff, 1011px 537px #fff, 1338px 1220px #fff, 661px 361px #fff,
    494px 41px #fff, 1581px 1518px #fff, 316px 253px #fff, 1652px 1906px #fff, 1972px 747px #fff, 230px 1700px #fff, 1909px 1126px #fff,
    435px 749px #fff, 595px 1284px #fff, 628px 959px #fff, 1008px 90px #fff, 409px 1074px #fff, 67px 1569px #fff, 471px 1148px #fff, 434px 273px #fff,
    532px 768px #fff, 1615px 986px #fff, 707px 253px #fff, 1708px 501px #fff, 846px 1070px #fff, 718px 668px #fff, 385px 425px #fff, 755px 1945px #fff,
    671px 1742px #fff, 1786px 524px #fff, 706px 1382px #fff, 648px 1343px #fff, 788px 994px #fff, 53px 921px #fff, 72px 847px #fff, 85px 624px #fff,
    1480px 1178px #fff, 1890px 1755px #fff, 983px 1925px #fff, 1076px 209px #fff, 1484px 1387px #fff, 1646px 1649px #fff, 874px 483px #fff,
    1485px 1986px #fff, 1780px 1406px #fff, 1333px 951px #fff, 1040px 1473px #fff, 1033px 560px #fff, 187px 475px #fff, 1600px 312px #fff,
    673px 763px #fff, 151px 272px #fff, 1029px 1755px #fff, 1685px 622px #fff, 1371px 1733px #fff, 250px 60px #fff, 259px 1755px #fff,
    706px 975px #fff, 412px 490px #fff, 1755px 1539px #fff, 1026px 265px #fff, 1844px 326px #fff, 1812px 1003px #fff, 1520px 1269px #fff,
    1901px 178px #fff, 1233px 1163px #fff, 842px 1892px #fff, 692px 1043px #fff, 790px 1285px #fff, 681px 18px #fff, 699px 775px #fff,
    237px 1894px #fff, 1138px 224px #fff, 1979px 233px #fff, 489px 189px #fff, 1169px 108px #fff, 894px 580px #fff, 1709px 539px #fff,
    1565px 1767px #fff, 1903px 1222px #fff, 1912px 570px #fff, 1186px 396px #fff, 491px 1516px #fff, 397px 1864px #fff, 1863px 262px #fff,
    1232px 677px #fff, 438px 365px #fff, 112px 1100px #fff, 266px 154px #fff, 670px 1247px #fff, 527px 551px #fff, 1997px 857px #fff,
    537px 1960px #fff, 1013px 110px #fff, 1481px 1579px #fff, 255px 65px #fff, 33px 1376px #fff, 1134px 116px #fff, 1824px 872px #fff,
    645px 741px #fff, 850px 168px #fff, 956px 1227px #fff, 94px 1641px #fff, 1803px 260px #fff, 401px 1205px #fff, 1902px 914px #fff,
    1800px 604px #fff, 608px 704px #fff, 232px 975px #fff, 538px 790px #fff, 1900px 514px #fff, 871px 592px #fff, 971px 1649px #fff, 1940px 15px #fff,
    1930px 1364px #fff, 1811px 1855px #fff, 262px 1163px #fff, 1971px 1120px #fff, 476px 80px #fff, 1417px 1344px #fff, 271px 137px #fff,
    943px 241px #fff, 863px 101px #fff, 1923px 1973px #fff, 1px 777px #fff, 1433px 458px #fff, 719px 1772px #fff, 159px 1113px #fff, 691px 627px #fff,
    1839px 413px #fff, 466px 402px #fff, 1382px 1718px #fff, 716px 737px #fff, 1411px 186px #fff, 1821px 376px #fff, 567px 748px #fff,
    1783px 61px #fff, 766px 1419px #fff, 1147px 1670px #fff, 1466px 253px #fff, 1145px 1921px #fff, 330px 437px #fff, 1701px 1904px #fff,
    91px 1136px #fff, 381px 723px #fff, 281px 1172px #fff, 1505px 1190px #fff, 1486px 1806px #fff, 1895px 1123px #fff, 1752px 22px #fff,
    1881px 306px #fff, 694px 1082px #fff, 74px 912px #fff, 254px 983px #fff, 1270px 141px #fff, 648px 523px #fff, 1955px 1391px #fff,
    357px 1234px #fff, 982px 1046px #fff, 1224px 792px #fff, 1929px 472px #fff, 451px 216px #fff, 832px 900px #fff, 292px 1332px #fff,
    1538px 1688px #fff, 464px 21px #fff, 976px 529px #fff, 1338px 725px #fff, 99px 1812px #fff, 877px 1710px #fff, 954px 184px #fff, 681px 1202px #fff,
    346px 1897px #fff, 1744px 235px #fff, 908px 192px #fff, 668px 338px #fff, 1769px 599px #fff, 746px 1801px #fff, 1940px 1436px #fff,
    621px 1244px #fff, 1674px 588px #fff, 347px 1844px #fff, 1686px 765px #fff, 225px 452px #fff, 1586px 1038px #fff, 575px 380px #fff,
    1405px 1789px #fff, 198px 386px #fff, 324px 106px #fff, 1700px 1428px #fff, 473px 1656px #fff, 1075px 1217px #fff, 1331px 1660px #fff,
    1135px 1099px #fff, 1350px 1097px #fff, 935px 1420px #fff, 1651px 730px #fff, 262px 1928px #fff, 1226px 263px #fff, 1698px 946px #fff,
    1076px 578px #fff, 733px 784px #fff, 1496px 1902px #fff, 343px 658px #fff, 65px 456px #fff, 1025px 615px #fff, 457px 423px #fff,
    1901px 1660px #fff, 1507px 466px #fff, 1115px 1583px #fff, 873px 1625px #fff, 239px 595px #fff, 1658px 681px #fff, 676px 330px #fff,
    1714px 37px #fff, 1129px 593px #fff, 1966px 1582px #fff, 859px 1723px #fff, 763px 1880px #fff, 1521px 1417px #fff, 899px 589px #fff,
    369px 9px #fff, 1101px 151px #fff, 1380px 1704px #fff, 1300px 554px #fff, 488px 1593px #fff, 1071px 692px #fff, 1619px 618px #fff,
    1429px 378px #fff, 1004px 522px #fff, 1464px 1187px #fff, 867px 1791px #fff, 1096px 1489px #fff, 1076px 737px #fff, 1014px 948px #fff,
    1442px 530px #fff, 1079px 499px #fff, 1585px 676px #fff, 497px 1555px #fff, 1462px 1360px #fff, 1747px 1822px #fff, 1564px 1156px #fff,
    1823px 266px #fff, 350px 445px #fff, 1300px 356px #fff, 1626px 1380px #fff, 405px 354px #fff, 1406px 123px #fff, 1471px 1400px #fff,
    242px 1634px #fff, 1585px 1180px #fff, 913px 1490px #fff, 496px 1036px #fff, 360px 168px #fff, 1310px 833px #fff, 498px 798px #fff,
    1703px 62px #fff, 700px 1810px #fff, 255px 1617px #fff, 1792px 1248px #fff, 1848px 13px #fff, 1720px 1597px #fff, 152px 336px #fff,
    516px 1333px #fff, 1412px 9px #fff, 760px 1166px #fff, 770px 479px #fff, 1368px 1974px #fff, 1745px 1101px #fff, 1155px 997px #fff,
    137px 852px #fff, 358px 863px #fff, 1521px 1874px #fff, 400px 1300px #fff, 1940px 1536px #fff, 65px 588px #fff, 856px 1965px #fff,
    1308px 742px #fff, 1624px 207px #fff, 193px 1659px #fff, 1254px 1295px #fff, 551px 1896px #fff, 1800px 1685px #fff, 596px 238px #fff,
    48px 1110px #fff, 1747px 150px #fff, 1555px 1785px #fff, 1010px 723px #fff, 1608px 1091px #fff, 1672px 683px #fff, 762px 1398px #fff,
    1621px 1077px #fff, 1414px 815px #fff, 720px 588px #fff, 1550px 121px #fff, 487px 552px #fff, 843px 241px #fff, 32px 1011px #fff,
    1518px 1423px #fff, 1591px 835px #fff, 1085px 294px #fff, 212px 1860px #fff, 1531px 155px #fff, 1226px 143px #fff, 1490px 974px #fff,
    1416px 456px #fff, 1433px 770px #fff, 1952px 609px #fff, 1699px 1236px #fff, 951px 1371px #fff, 3px 1197px #fff, 702px 1304px #fff,
    1599px 1699px #fff, 1312px 95px #fff, 1326px 502px #fff, 510px 1460px #fff, 1814px 1564px #fff, 1376px 1121px #fff, 1163px 810px #fff,
    727px 54px #fff, 1039px 205px #fff, 1539px 254px #fff, 1332px 796px #fff, 1918px 578px #fff, 209px 1173px #fff, 897px 693px #fff,
    1071px 1032px #fff, 515px 664px #fff, 1271px 1225px #fff, 302px 570px #fff, 1927px 960px #fff, 771px 1199px #fff, 1663px 631px #fff,
    773px 1683px #fff, 64px 653px #fff, 1153px 1270px #fff, 1480px 965px #fff, 1526px 443px #fff, 25px 782px #fff, 1228px 24px #fff, 693px 933px #fff,
    1407px 1747px #fff, 1237px 1290px #fff, 1410px 1701px #fff, 1867px 1442px #fff, 703px 1838px #fff, 267px 734px #fff, 1417px 147px #fff,
    1114px 979px #fff, 796px 424px #fff, 1384px 697px #fff, 1628px 58px #fff, 861px 1936px #fff, 769px 84px #fff, 1928px 1637px #fff,
    458px 1040px #fff, 1665px 408px #fff, 1920px 1990px #fff, 732px 605px #fff, 853px 1954px #fff, 795px 105px #fff, 1888px 251px #fff,
    536px 828px #fff, 1612px 419px #fff, 56px 1672px #fff, 892px 1673px #fff, 172px 693px #fff, 541px 1503px #fff, 1430px 1132px #fff,
    459px 1913px #fff, 960px 1215px #fff, 410px 1493px #fff, 978px 881px #fff, 453px 997px #fff, 785px 840px #fff, 169px 1867px #fff, 228px 434px #fff,
    1284px 1993px #fff, 1755px 1677px #fff, 84px 782px #fff, 1039px 1485px #fff, 833px 1444px #fff, 830px 223px #fff, 452px 1559px #fff,
    1496px 1750px #fff, 1810px 364px #fff, 250px 838px #fff, 533px 1477px #fff, 1223px 1502px #fff, 572px 750px #fff, 544px 1254px #fff,
    1307px 1945px #fff, 90px 546px #fff, 763px 183px #fff, 865px 1851px #fff, 1554px 1174px #fff, 573px 887px #fff, 444px 913px #fff,
    1329px 399px #fff, 1876px 954px #fff, 1800px 36px #fff, 1703px 1784px #fff, 738px 1763px #fff, 1590px 457px #fff, 897px 761px #fff,
    163px 308px #fff, 1353px 1800px #fff, 419px 656px #fff, 1987px 1028px #fff, 121px 427px #fff, 1091px 1626px #fff, 1460px 1154px #fff,
    1236px 118px #fff, 1732px 380px #fff, 112px 1617px #fff, 693px 109px #fff, 1719px 1836px #fff, 406px 1326px #fff, 445px 1844px #fff,
    873px 1913px #fff, 1113px 1504px #fff, 1315px 1055px #fff, 640px 1323px #fff, 1655px 1005px #fff, 1244px 59px #fff, 1245px 1358px #fff,
    893px 1325px #fff, 795px 1874px #fff, 615px 1973px #fff, 652px 1052px #fff, 1506px 4px #fff, 38px 1767px #fff, 1746px 818px #fff,
    1325px 435px #fff, 44px 174px #fff, 1730px 834px #fff, 1230px 1244px #fff, 985px 1805px #fff, 173px 230px #fff, 87px 984px #fff, 845px 154px #fff,
    471px 915px #fff, 249px 1250px #fff, 583px 402px #fff, 1863px 1275px #fff, 185px 753px #fff, 1367px 1170px #fff, 1896px 489px #fff,
    203px 1409px #fff, 568px 594px #fff, 81px 624px #fff, 986px 794px #fff, 290px 1320px #fff, 130px 926px #fff, 117px 1879px #fff, 1208px 1577px #fff,
    778px 113px #fff, 1355px 1996px #fff, 1370px 36px #fff, 1270px 1321px #fff, 1263px 922px #fff, 240px 860px #fff, 770px 1612px #fff,
    1980px 771px #fff, 588px 1925px #fff, 256px 511px #fff, 1281px 1063px #fff, 182px 1689px #fff, 45px 709px #fff, 1407px 309px #fff,
    371px 1722px #fff, 1753px 676px #fff, 902px 1122px #fff, 1959px 1277px #fff, 147px 1572px #fff, 1203px 734px #fff, 1499px 1127px #fff,
    1437px 173px #fff, 1457px 79px #fff, 88px 1116px #fff, 439px 437px #fff, 1363px 215px #fff, 379px 1672px #fff, 88px 964px #fff, 1156px 989px #fff,
    383px 766px #fff, 1247px 1828px #fff, 1278px 310px #fff, 1515px 724px #fff, 143px 785px #fff, 516px 1943px #fff, 471px 330px #fff,
    1063px 1304px #fff, 1280px 1178px #fff, 1751px 1524px #fff, 228px 537px #fff, 1393px 1479px #fff, 1328px 821px #fff, 1005px 714px #fff,
    1789px 638px #fff, 1515px 1906px #fff, 504px 1869px #fff, 127px 90px #fff, 74px 756px #fff, 1578px 68px #fff, 321px 273px #fff, 915px 1934px #fff,
    1430px 1959px #fff, 86px 1537px #fff, 1282px 1856px #fff, 714px 907px #fff, 213px 349px #fff, 1785px 1948px #fff, 931px 1131px #fff,
    1872px 1115px #fff, 82px 790px #fff, 644px 1761px #fff, 216px 243px #fff, 858px 1779px #fff, 208px 3px #fff, 473px 1132px #fff, 1159px 1452px #fff,
    1650px 860px #fff, 455px 1694px #fff, 967px 114px #fff, 690px 60px #fff, 1896px 1569px #fff, 1939px 826px #fff, 1298px 1214px #fff,
    832px 610px #fff, 1380px 306px #fff, 129px 253px #fff, 1728px 1427px #fff, 1017px 1653px #fff, 1284px 693px #fff, 622px 196px #fff,
    1647px 591px #fff, 259px 1197px #fff, 781px 902px #fff, 1943px 1380px #fff, 292px 1694px #fff, 515px 1616px #fff, 1801px 1643px #fff,
    1729px 1352px #fff, 1274px 1281px #fff, 87px 1147px #fff, 1732px 1829px #fff, 1807px 1375px #fff, 43px 688px #fff, 929px 81px #fff,
    926px 126px #fff, 138px 622px #fff, 869px 1209px #fff, 1000px 1922px #fff, 338px 1741px #fff, 143px 1308px #fff, 938px 956px #fff,
    1116px 484px #fff, 151px 1989px #fff, 1644px 77px #fff, 446px 427px #fff, 1192px 1501px #fff, 1336px 1963px #fff, 1362px 1603px #fff,
    1359px 1854px #fff, 989px 170px #fff, 75px 246px #fff, 446px 785px #fff, 1302px 1897px #fff, 442px 501px #fff, 530px 1363px #fff, 738px 872px #fff,
    691px 1066px #fff, 1286px 920px #fff, 316px 1672px #fff, 699px 1986px #fff, 1497px 1197px #fff, 1119px 767px #fff, 1623px 1088px #fff,
    207px 431px #fff, 1560px 147px #fff, 1301px 734px #fff, 1104px 569px #fff;
  animation: animStar 50s linear infinite;
}
#stars:after {
  content: ' ';
  position: absolute;
  top: 2000px;
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 1253px 1998px #fff, 934px 1912px #fff, 405px 1367px #fff, 961px 592px #fff, 127px 1483px #fff, 1936px 1142px #fff, 908px 566px #fff,
    337px 1223px #fff, 2px 466px #fff, 1665px 981px #fff, 689px 1778px #fff, 1284px 1907px #fff, 651px 1977px #fff, 160px 367px #fff, 390px 877px #fff,
    1795px 634px #fff, 1262px 222px #fff, 1345px 874px #fff, 3px 1347px #fff, 782px 909px #fff, 1254px 98px #fff, 1589px 1035px #fff,
    1762px 1066px #fff, 772px 927px #fff, 1374px 771px #fff, 806px 587px #fff, 1792px 38px #fff, 1223px 561px #fff, 1225px 171px #fff,
    179px 1632px #fff, 1561px 1345px #fff, 767px 727px #fff, 1308px 228px #fff, 1149px 118px #fff, 1176px 1124px #fff, 1349px 783px #fff,
    1297px 1093px #fff, 1770px 747px #fff, 1961px 7px #fff, 1808px 315px #fff, 1959px 1565px #fff, 523px 803px #fff, 1915px 1418px #fff,
    1133px 1476px #fff, 1832px 925px #fff, 1097px 1942px #fff, 85px 1346px #fff, 787px 1719px #fff, 970px 1352px #fff, 1031px 746px #fff,
    1620px 1437px #fff, 226px 1568px #fff, 845px 881px #fff, 557px 1339px #fff, 1956px 100px #fff, 1390px 1901px #fff, 494px 518px #fff,
    830px 1419px #fff, 680px 197px #fff, 1464px 1631px #fff, 1341px 1000px #fff, 1135px 1960px #fff, 832px 516px #fff, 1248px 1936px #fff,
    1020px 1030px #fff, 1449px 550px #fff, 1425px 1059px #fff, 221px 1596px #fff, 1652px 91px #fff, 1617px 1417px #fff, 482px 527px #fff,
    718px 1436px #fff, 869px 1842px #fff, 1138px 1423px #fff, 1482px 1340px #fff, 1523px 627px #fff, 912px 1460px #fff, 847px 766px #fff,
    366px 573px #fff, 31px 1394px #fff, 1184px 1109px #fff, 438px 938px #fff, 577px 686px #fff, 434px 506px #fff, 895px 1470px #fff, 240px 226px #fff,
    974px 535px #fff, 196px 307px #fff, 683px 1038px #fff, 1462px 984px #fff, 1648px 717px #fff, 1104px 1097px #fff, 296px 1172px #fff,
    673px 376px #fff, 211px 784px #fff, 561px 1011px #fff, 856px 1921px #fff, 1459px 1577px #fff, 1933px 1006px #fff, 37px 239px #fff,
    1894px 1948px #fff, 1106px 769px #fff, 773px 1652px #fff, 262px 681px #fff, 861px 737px #fff, 890px 546px #fff, 141px 1237px #fff,
    917px 893px #fff, 1712px 546px #fff, 844px 301px #fff, 41px 579px #fff, 232px 722px #fff, 703px 187px #fff, 1458px 1081px #fff, 1106px 857px #fff,
    1573px 904px #fff, 1203px 1984px #fff, 1000px 1748px #fff, 1476px 649px #fff, 1011px 537px #fff, 1338px 1220px #fff, 661px 361px #fff,
    494px 41px #fff, 1581px 1518px #fff, 316px 253px #fff, 1652px 1906px #fff, 1972px 747px #fff, 230px 1700px #fff, 1909px 1126px #fff,
    435px 749px #fff, 595px 1284px #fff, 628px 959px #fff, 1008px 90px #fff, 409px 1074px #fff, 67px 1569px #fff, 471px 1148px #fff, 434px 273px #fff,
    532px 768px #fff, 1615px 986px #fff, 707px 253px #fff, 1708px 501px #fff, 846px 1070px #fff, 718px 668px #fff, 385px 425px #fff, 755px 1945px #fff,
    671px 1742px #fff, 1786px 524px #fff, 706px 1382px #fff, 648px 1343px #fff, 788px 994px #fff, 53px 921px #fff, 72px 847px #fff, 85px 624px #fff,
    1480px 1178px #fff, 1890px 1755px #fff, 983px 1925px #fff, 1076px 209px #fff, 1484px 1387px #fff, 1646px 1649px #fff, 874px 483px #fff,
    1485px 1986px #fff, 1780px 1406px #fff, 1333px 951px #fff, 1040px 1473px #fff, 1033px 560px #fff, 187px 475px #fff, 1600px 312px #fff,
    673px 763px #fff, 151px 272px #fff, 1029px 1755px #fff, 1685px 622px #fff, 1371px 1733px #fff, 250px 60px #fff, 259px 1755px #fff,
    706px 975px #fff, 412px 490px #fff, 1755px 1539px #fff, 1026px 265px #fff, 1844px 326px #fff, 1812px 1003px #fff, 1520px 1269px #fff,
    1901px 178px #fff, 1233px 1163px #fff, 842px 1892px #fff, 692px 1043px #fff, 790px 1285px #fff, 681px 18px #fff, 699px 775px #fff,
    237px 1894px #fff, 1138px 224px #fff, 1979px 233px #fff, 489px 189px #fff, 1169px 108px #fff, 894px 580px #fff, 1709px 539px #fff,
    1565px 1767px #fff, 1903px 1222px #fff, 1912px 570px #fff, 1186px 396px #fff, 491px 1516px #fff, 397px 1864px #fff, 1863px 262px #fff,
    1232px 677px #fff, 438px 365px #fff, 112px 1100px #fff, 266px 154px #fff, 670px 1247px #fff, 527px 551px #fff, 1997px 857px #fff,
    537px 1960px #fff, 1013px 110px #fff, 1481px 1579px #fff, 255px 65px #fff, 33px 1376px #fff, 1134px 116px #fff, 1824px 872px #fff,
    645px 741px #fff, 850px 168px #fff, 956px 1227px #fff, 94px 1641px #fff, 1803px 260px #fff, 401px 1205px #fff, 1902px 914px #fff,
    1800px 604px #fff, 608px 704px #fff, 232px 975px #fff, 538px 790px #fff, 1900px 514px #fff, 871px 592px #fff, 971px 1649px #fff, 1940px 15px #fff,
    1930px 1364px #fff, 1811px 1855px #fff, 262px 1163px #fff, 1971px 1120px #fff, 476px 80px #fff, 1417px 1344px #fff, 271px 137px #fff,
    943px 241px #fff, 863px 101px #fff, 1923px 1973px #fff, 1px 777px #fff, 1433px 458px #fff, 719px 1772px #fff, 159px 1113px #fff, 691px 627px #fff,
    1839px 413px #fff, 466px 402px #fff, 1382px 1718px #fff, 716px 737px #fff, 1411px 186px #fff, 1821px 376px #fff, 567px 748px #fff,
    1783px 61px #fff, 766px 1419px #fff, 1147px 1670px #fff, 1466px 253px #fff, 1145px 1921px #fff, 330px 437px #fff, 1701px 1904px #fff,
    91px 1136px #fff, 381px 723px #fff, 281px 1172px #fff, 1505px 1190px #fff, 1486px 1806px #fff, 1895px 1123px #fff, 1752px 22px #fff,
    1881px 306px #fff, 694px 1082px #fff, 74px 912px #fff, 254px 983px #fff, 1270px 141px #fff, 648px 523px #fff, 1955px 1391px #fff,
    357px 1234px #fff, 982px 1046px #fff, 1224px 792px #fff, 1929px 472px #fff, 451px 216px #fff, 832px 900px #fff, 292px 1332px #fff,
    1538px 1688px #fff, 464px 21px #fff, 976px 529px #fff, 1338px 725px #fff, 99px 1812px #fff, 877px 1710px #fff, 954px 184px #fff, 681px 1202px #fff,
    346px 1897px #fff, 1744px 235px #fff, 908px 192px #fff, 668px 338px #fff, 1769px 599px #fff, 746px 1801px #fff, 1940px 1436px #fff,
    621px 1244px #fff, 1674px 588px #fff, 347px 1844px #fff, 1686px 765px #fff, 225px 452px #fff, 1586px 1038px #fff, 575px 380px #fff,
    1405px 1789px #fff, 198px 386px #fff, 324px 106px #fff, 1700px 1428px #fff, 473px 1656px #fff, 1075px 1217px #fff, 1331px 1660px #fff,
    1135px 1099px #fff, 1350px 1097px #fff, 935px 1420px #fff, 1651px 730px #fff, 262px 1928px #fff, 1226px 263px #fff, 1698px 946px #fff,
    1076px 578px #fff, 733px 784px #fff, 1496px 1902px #fff, 343px 658px #fff, 65px 456px #fff, 1025px 615px #fff, 457px 423px #fff,
    1901px 1660px #fff, 1507px 466px #fff, 1115px 1583px #fff, 873px 1625px #fff, 239px 595px #fff, 1658px 681px #fff, 676px 330px #fff,
    1714px 37px #fff, 1129px 593px #fff, 1966px 1582px #fff, 859px 1723px #fff, 763px 1880px #fff, 1521px 1417px #fff, 899px 589px #fff,
    369px 9px #fff, 1101px 151px #fff, 1380px 1704px #fff, 1300px 554px #fff, 488px 1593px #fff, 1071px 692px #fff, 1619px 618px #fff,
    1429px 378px #fff, 1004px 522px #fff, 1464px 1187px #fff, 867px 1791px #fff, 1096px 1489px #fff, 1076px 737px #fff, 1014px 948px #fff,
    1442px 530px #fff, 1079px 499px #fff, 1585px 676px #fff, 497px 1555px #fff, 1462px 1360px #fff, 1747px 1822px #fff, 1564px 1156px #fff,
    1823px 266px #fff, 350px 445px #fff, 1300px 356px #fff, 1626px 1380px #fff, 405px 354px #fff, 1406px 123px #fff, 1471px 1400px #fff,
    242px 1634px #fff, 1585px 1180px #fff, 913px 1490px #fff, 496px 1036px #fff, 360px 168px #fff, 1310px 833px #fff, 498px 798px #fff,
    1703px 62px #fff, 700px 1810px #fff, 255px 1617px #fff, 1792px 1248px #fff, 1848px 13px #fff, 1720px 1597px #fff, 152px 336px #fff,
    516px 1333px #fff, 1412px 9px #fff, 760px 1166px #fff, 770px 479px #fff, 1368px 1974px #fff, 1745px 1101px #fff, 1155px 997px #fff,
    137px 852px #fff, 358px 863px #fff, 1521px 1874px #fff, 400px 1300px #fff, 1940px 1536px #fff, 65px 588px #fff, 856px 1965px #fff,
    1308px 742px #fff, 1624px 207px #fff, 193px 1659px #fff, 1254px 1295px #fff, 551px 1896px #fff, 1800px 1685px #fff, 596px 238px #fff,
    48px 1110px #fff, 1747px 150px #fff, 1555px 1785px #fff, 1010px 723px #fff, 1608px 1091px #fff, 1672px 683px #fff, 762px 1398px #fff,
    1621px 1077px #fff, 1414px 815px #fff, 720px 588px #fff, 1550px 121px #fff, 487px 552px #fff, 843px 241px #fff, 32px 1011px #fff,
    1518px 1423px #fff, 1591px 835px #fff, 1085px 294px #fff, 212px 1860px #fff, 1531px 155px #fff, 1226px 143px #fff, 1490px 974px #fff,
    1416px 456px #fff, 1433px 770px #fff, 1952px 609px #fff, 1699px 1236px #fff, 951px 1371px #fff, 3px 1197px #fff, 702px 1304px #fff,
    1599px 1699px #fff, 1312px 95px #fff, 1326px 502px #fff, 510px 1460px #fff, 1814px 1564px #fff, 1376px 1121px #fff, 1163px 810px #fff,
    727px 54px #fff, 1039px 205px #fff, 1539px 254px #fff, 1332px 796px #fff, 1918px 578px #fff, 209px 1173px #fff, 897px 693px #fff,
    1071px 1032px #fff, 515px 664px #fff, 1271px 1225px #fff, 302px 570px #fff, 1927px 960px #fff, 771px 1199px #fff, 1663px 631px #fff,
    773px 1683px #fff, 64px 653px #fff, 1153px 1270px #fff, 1480px 965px #fff, 1526px 443px #fff, 25px 782px #fff, 1228px 24px #fff, 693px 933px #fff,
    1407px 1747px #fff, 1237px 1290px #fff, 1410px 1701px #fff, 1867px 1442px #fff, 703px 1838px #fff, 267px 734px #fff, 1417px 147px #fff,
    1114px 979px #fff, 796px 424px #fff, 1384px 697px #fff, 1628px 58px #fff, 861px 1936px #fff, 769px 84px #fff, 1928px 1637px #fff,
    458px 1040px #fff, 1665px 408px #fff, 1920px 1990px #fff, 732px 605px #fff, 853px 1954px #fff, 795px 105px #fff, 1888px 251px #fff,
    536px 828px #fff, 1612px 419px #fff, 56px 1672px #fff, 892px 1673px #fff, 172px 693px #fff, 541px 1503px #fff, 1430px 1132px #fff,
    459px 1913px #fff, 960px 1215px #fff, 410px 1493px #fff, 978px 881px #fff, 453px 997px #fff, 785px 840px #fff, 169px 1867px #fff, 228px 434px #fff,
    1284px 1993px #fff, 1755px 1677px #fff, 84px 782px #fff, 1039px 1485px #fff, 833px 1444px #fff, 830px 223px #fff, 452px 1559px #fff,
    1496px 1750px #fff, 1810px 364px #fff, 250px 838px #fff, 533px 1477px #fff, 1223px 1502px #fff, 572px 750px #fff, 544px 1254px #fff,
    1307px 1945px #fff, 90px 546px #fff, 763px 183px #fff, 865px 1851px #fff, 1554px 1174px #fff, 573px 887px #fff, 444px 913px #fff,
    1329px 399px #fff, 1876px 954px #fff, 1800px 36px #fff, 1703px 1784px #fff, 738px 1763px #fff, 1590px 457px #fff, 897px 761px #fff,
    163px 308px #fff, 1353px 1800px #fff, 419px 656px #fff, 1987px 1028px #fff, 121px 427px #fff, 1091px 1626px #fff, 1460px 1154px #fff,
    1236px 118px #fff, 1732px 380px #fff, 112px 1617px #fff, 693px 109px #fff, 1719px 1836px #fff, 406px 1326px #fff, 445px 1844px #fff,
    873px 1913px #fff, 1113px 1504px #fff, 1315px 1055px #fff, 640px 1323px #fff, 1655px 1005px #fff, 1244px 59px #fff, 1245px 1358px #fff,
    893px 1325px #fff, 795px 1874px #fff, 615px 1973px #fff, 652px 1052px #fff, 1506px 4px #fff, 38px 1767px #fff, 1746px 818px #fff,
    1325px 435px #fff, 44px 174px #fff, 1730px 834px #fff, 1230px 1244px #fff, 985px 1805px #fff, 173px 230px #fff, 87px 984px #fff, 845px 154px #fff,
    471px 915px #fff, 249px 1250px #fff, 583px 402px #fff, 1863px 1275px #fff, 185px 753px #fff, 1367px 1170px #fff, 1896px 489px #fff,
    203px 1409px #fff, 568px 594px #fff, 81px 624px #fff, 986px 794px #fff, 290px 1320px #fff, 130px 926px #fff, 117px 1879px #fff, 1208px 1577px #fff,
    778px 113px #fff, 1355px 1996px #fff, 1370px 36px #fff, 1270px 1321px #fff, 1263px 922px #fff, 240px 860px #fff, 770px 1612px #fff,
    1980px 771px #fff, 588px 1925px #fff, 256px 511px #fff, 1281px 1063px #fff, 182px 1689px #fff, 45px 709px #fff, 1407px 309px #fff,
    371px 1722px #fff, 1753px 676px #fff, 902px 1122px #fff, 1959px 1277px #fff, 147px 1572px #fff, 1203px 734px #fff, 1499px 1127px #fff,
    1437px 173px #fff, 1457px 79px #fff, 88px 1116px #fff, 439px 437px #fff, 1363px 215px #fff, 379px 1672px #fff, 88px 964px #fff, 1156px 989px #fff,
    383px 766px #fff, 1247px 1828px #fff, 1278px 310px #fff, 1515px 724px #fff, 143px 785px #fff, 516px 1943px #fff, 471px 330px #fff,
    1063px 1304px #fff, 1280px 1178px #fff, 1751px 1524px #fff, 228px 537px #fff, 1393px 1479px #fff, 1328px 821px #fff, 1005px 714px #fff,
    1789px 638px #fff, 1515px 1906px #fff, 504px 1869px #fff, 127px 90px #fff, 74px 756px #fff, 1578px 68px #fff, 321px 273px #fff, 915px 1934px #fff,
    1430px 1959px #fff, 86px 1537px #fff, 1282px 1856px #fff, 714px 907px #fff, 213px 349px #fff, 1785px 1948px #fff, 931px 1131px #fff,
    1872px 1115px #fff, 82px 790px #fff, 644px 1761px #fff, 216px 243px #fff, 858px 1779px #fff, 208px 3px #fff, 473px 1132px #fff, 1159px 1452px #fff,
    1650px 860px #fff, 455px 1694px #fff, 967px 114px #fff, 690px 60px #fff, 1896px 1569px #fff, 1939px 826px #fff, 1298px 1214px #fff,
    832px 610px #fff, 1380px 306px #fff, 129px 253px #fff, 1728px 1427px #fff, 1017px 1653px #fff, 1284px 693px #fff, 622px 196px #fff,
    1647px 591px #fff, 259px 1197px #fff, 781px 902px #fff, 1943px 1380px #fff, 292px 1694px #fff, 515px 1616px #fff, 1801px 1643px #fff,
    1729px 1352px #fff, 1274px 1281px #fff, 87px 1147px #fff, 1732px 1829px #fff, 1807px 1375px #fff, 43px 688px #fff, 929px 81px #fff,
    926px 126px #fff, 138px 622px #fff, 869px 1209px #fff, 1000px 1922px #fff, 338px 1741px #fff, 143px 1308px #fff, 938px 956px #fff,
    1116px 484px #fff, 151px 1989px #fff, 1644px 77px #fff, 446px 427px #fff, 1192px 1501px #fff, 1336px 1963px #fff, 1362px 1603px #fff,
    1359px 1854px #fff, 989px 170px #fff, 75px 246px #fff, 446px 785px #fff, 1302px 1897px #fff, 442px 501px #fff, 530px 1363px #fff, 738px 872px #fff,
    691px 1066px #fff, 1286px 920px #fff, 316px 1672px #fff, 699px 1986px #fff, 1497px 1197px #fff, 1119px 767px #fff, 1623px 1088px #fff,
    207px 431px #fff, 1560px 147px #fff, 1301px 734px #fff, 1104px 569px #fff;
}

#stars2 {
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: 450px 365px #fff, 601px 114px #fff, 367px 755px #fff, 1247px 543px #fff, 1377px 889px #fff, 1169px 384px #fff, 649px 1651px #fff,
    645px 1556px #fff, 325px 75px #fff, 1765px 1381px #fff, 388px 1526px #fff, 1193px 62px #fff, 952px 57px #fff, 1578px 622px #fff, 1228px 757px #fff,
    1687px 622px #fff, 1364px 880px #fff, 585px 254px #fff, 1751px 704px #fff, 1310px 337px #fff, 1937px 1764px #fff, 1151px 1548px #fff,
    1423px 154px #fff, 914px 219px #fff, 1480px 509px #fff, 957px 1737px #fff, 1855px 159px #fff, 1536px 417px #fff, 886px 1370px #fff,
    1504px 568px #fff, 576px 15px #fff, 572px 736px #fff, 1040px 1728px #fff, 1038px 482px #fff, 1856px 468px #fff, 1352px 171px #fff,
    1346px 1604px #fff, 1540px 1637px #fff, 118px 851px #fff, 33px 882px #fff, 1491px 527px #fff, 1617px 1734px #fff, 312px 1348px #fff,
    1654px 1535px #fff, 306px 1597px #fff, 157px 1874px #fff, 3px 37px #fff, 1033px 1722px #fff, 1577px 1044px #fff, 1839px 1246px #fff,
    1089px 1713px #fff, 1335px 1737px #fff, 1288px 359px #fff, 1501px 1481px #fff, 1398px 966px #fff, 905px 746px #fff, 560px 862px #fff,
    1457px 110px #fff, 1886px 837px #fff, 1111px 1449px #fff, 1731px 776px #fff, 271px 1098px #fff, 1942px 511px #fff, 1551px 392px #fff,
    459px 716px #fff, 1290px 1595px #fff, 603px 287px #fff, 223px 708px #fff, 1700px 1593px #fff, 1557px 1362px #fff, 1142px 1960px #fff,
    1653px 33px #fff, 1010px 252px #fff, 1206px 521px #fff, 585px 995px #fff, 356px 23px #fff, 1110px 991px #fff, 580px 1049px #fff, 296px 504px #fff,
    154px 480px #fff, 1125px 441px #fff, 1573px 1653px #fff, 1581px 1849px #fff, 1819px 346px #fff, 1647px 1207px #fff, 643px 1825px #fff,
    143px 244px #fff, 172px 917px #fff, 253px 593px #fff, 1774px 1162px #fff, 621px 657px #fff, 1850px 1973px #fff, 104px 619px #fff,
    104px 1142px #fff, 496px 11px #fff, 1308px 1694px #fff, 82px 1408px #fff, 151px 1261px #fff, 377px 903px #fff, 669px 984px #fff, 200px 815px #fff,
    266px 787px #fff, 748px 499px #fff, 75px 1680px #fff, 603px 245px #fff, 1150px 516px #fff, 1633px 454px #fff, 1083px 1902px #fff,
    1231px 1138px #fff, 1738px 606px #fff, 648px 628px #fff, 331px 559px #fff, 601px 382px #fff, 561px 164px #fff, 449px 925px #fff, 1645px 257px #fff,
    1424px 1928px #fff, 1051px 1411px #fff, 569px 388px #fff, 1883px 352px #fff, 667px 1494px #fff, 600px 960px #fff, 439px 452px #fff,
    462px 125px #fff, 827px 170px #fff, 621px 154px #fff, 17px 351px #fff, 1915px 101px #fff, 1995px 120px #fff, 3px 1612px #fff, 34px 385px #fff,
    1792px 1802px #fff, 50px 1471px #fff, 699px 1023px #fff, 1183px 975px #fff, 44px 723px #fff, 168px 1747px #fff, 1988px 20px #fff,
    1224px 431px #fff, 1737px 1564px #fff, 1266px 423px #fff, 626px 1004px #fff, 1519px 1511px #fff, 184px 1569px #fff, 1670px 1589px #fff,
    707px 986px #fff, 677px 428px #fff, 898px 759px #fff, 1231px 651px #fff, 339px 1578px #fff, 479px 1504px #fff, 1125px 944px #fff,
    1870px 632px #fff, 1867px 1723px #fff, 1262px 1424px #fff, 730px 137px #fff, 917px 956px #fff, 115px 1034px #fff, 1575px 745px #fff,
    1830px 564px #fff, 1134px 1620px #fff, 1780px 1336px #fff, 651px 55px #fff, 478px 1247px #fff, 1658px 131px #fff, 936px 1167px #fff,
    331px 964px #fff, 1483px 1097px #fff, 1895px 818px #fff, 848px 1910px #fff, 570px 1127px #fff, 758px 299px #fff, 1911px 1221px #fff,
    1090px 840px #fff, 9px 1956px #fff, 1123px 40px #fff, 29px 1733px #fff, 1681px 1292px #fff, 928px 1470px #fff, 1499px 1831px #fff,
    373px 1328px #fff, 888px 1671px #fff, 80px 1026px #fff, 1448px 1668px #fff, 600px 1257px #fff, 629px 144px #fff, 877px 1622px #fff,
    388px 1114px #fff, 770px 258px #fff, 1380px 1165px #fff, 1540px 1977px #fff, 1792px 1156px #fff, 661px 259px #fff, 1668px 364px #fff,
    1592px 933px #fff, 688px 1296px #fff, 69px 1971px #fff, 425px 507px #fff, 1746px 1551px #fff, 1379px 91px #fff;
  animation: animStar 100s linear infinite;
}
#stars2:after {
  content: ' ';
  position: absolute;
  top: 2000px;
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: 450px 365px #fff, 601px 114px #fff, 367px 755px #fff, 1247px 543px #fff, 1377px 889px #fff, 1169px 384px #fff, 649px 1651px #fff,
    645px 1556px #fff, 325px 75px #fff, 1765px 1381px #fff, 388px 1526px #fff, 1193px 62px #fff, 952px 57px #fff, 1578px 622px #fff, 1228px 757px #fff,
    1687px 622px #fff, 1364px 880px #fff, 585px 254px #fff, 1751px 704px #fff, 1310px 337px #fff, 1937px 1764px #fff, 1151px 1548px #fff,
    1423px 154px #fff, 914px 219px #fff, 1480px 509px #fff, 957px 1737px #fff, 1855px 159px #fff, 1536px 417px #fff, 886px 1370px #fff,
    1504px 568px #fff, 576px 15px #fff, 572px 736px #fff, 1040px 1728px #fff, 1038px 482px #fff, 1856px 468px #fff, 1352px 171px #fff,
    1346px 1604px #fff, 1540px 1637px #fff, 118px 851px #fff, 33px 882px #fff, 1491px 527px #fff, 1617px 1734px #fff, 312px 1348px #fff,
    1654px 1535px #fff, 306px 1597px #fff, 157px 1874px #fff, 3px 37px #fff, 1033px 1722px #fff, 1577px 1044px #fff, 1839px 1246px #fff,
    1089px 1713px #fff, 1335px 1737px #fff, 1288px 359px #fff, 1501px 1481px #fff, 1398px 966px #fff, 905px 746px #fff, 560px 862px #fff,
    1457px 110px #fff, 1886px 837px #fff, 1111px 1449px #fff, 1731px 776px #fff, 271px 1098px #fff, 1942px 511px #fff, 1551px 392px #fff,
    459px 716px #fff, 1290px 1595px #fff, 603px 287px #fff, 223px 708px #fff, 1700px 1593px #fff, 1557px 1362px #fff, 1142px 1960px #fff,
    1653px 33px #fff, 1010px 252px #fff, 1206px 521px #fff, 585px 995px #fff, 356px 23px #fff, 1110px 991px #fff, 580px 1049px #fff, 296px 504px #fff,
    154px 480px #fff, 1125px 441px #fff, 1573px 1653px #fff, 1581px 1849px #fff, 1819px 346px #fff, 1647px 1207px #fff, 643px 1825px #fff,
    143px 244px #fff, 172px 917px #fff, 253px 593px #fff, 1774px 1162px #fff, 621px 657px #fff, 1850px 1973px #fff, 104px 619px #fff,
    104px 1142px #fff, 496px 11px #fff, 1308px 1694px #fff, 82px 1408px #fff, 151px 1261px #fff, 377px 903px #fff, 669px 984px #fff, 200px 815px #fff,
    266px 787px #fff, 748px 499px #fff, 75px 1680px #fff, 603px 245px #fff, 1150px 516px #fff, 1633px 454px #fff, 1083px 1902px #fff,
    1231px 1138px #fff, 1738px 606px #fff, 648px 628px #fff, 331px 559px #fff, 601px 382px #fff, 561px 164px #fff, 449px 925px #fff, 1645px 257px #fff,
    1424px 1928px #fff, 1051px 1411px #fff, 569px 388px #fff, 1883px 352px #fff, 667px 1494px #fff, 600px 960px #fff, 439px 452px #fff,
    462px 125px #fff, 827px 170px #fff, 621px 154px #fff, 17px 351px #fff, 1915px 101px #fff, 1995px 120px #fff, 3px 1612px #fff, 34px 385px #fff,
    1792px 1802px #fff, 50px 1471px #fff, 699px 1023px #fff, 1183px 975px #fff, 44px 723px #fff, 168px 1747px #fff, 1988px 20px #fff,
    1224px 431px #fff, 1737px 1564px #fff, 1266px 423px #fff, 626px 1004px #fff, 1519px 1511px #fff, 184px 1569px #fff, 1670px 1589px #fff,
    707px 986px #fff, 677px 428px #fff, 898px 759px #fff, 1231px 651px #fff, 339px 1578px #fff, 479px 1504px #fff, 1125px 944px #fff,
    1870px 632px #fff, 1867px 1723px #fff, 1262px 1424px #fff, 730px 137px #fff, 917px 956px #fff, 115px 1034px #fff, 1575px 745px #fff,
    1830px 564px #fff, 1134px 1620px #fff, 1780px 1336px #fff, 651px 55px #fff, 478px 1247px #fff, 1658px 131px #fff, 936px 1167px #fff,
    331px 964px #fff, 1483px 1097px #fff, 1895px 818px #fff, 848px 1910px #fff, 570px 1127px #fff, 758px 299px #fff, 1911px 1221px #fff,
    1090px 840px #fff, 9px 1956px #fff, 1123px 40px #fff, 29px 1733px #fff, 1681px 1292px #fff, 928px 1470px #fff, 1499px 1831px #fff,
    373px 1328px #fff, 888px 1671px #fff, 80px 1026px #fff, 1448px 1668px #fff, 600px 1257px #fff, 629px 144px #fff, 877px 1622px #fff,
    388px 1114px #fff, 770px 258px #fff, 1380px 1165px #fff, 1540px 1977px #fff, 1792px 1156px #fff, 661px 259px #fff, 1668px 364px #fff,
    1592px 933px #fff, 688px 1296px #fff, 69px 1971px #fff, 425px 507px #fff, 1746px 1551px #fff, 1379px 91px #fff;
}

#stars3 {
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 602px 1443px #fff, 81px 1305px #fff, 76px 1257px #fff, 1923px 1172px #fff, 1385px 89px #fff, 1744px 416px #fff, 22px 120px #fff,
    372px 874px #fff, 1350px 939px #fff, 1989px 81px #fff, 363px 36px #fff, 812px 1008px #fff, 381px 1806px #fff, 134px 1711px #fff,
    1630px 1959px #fff, 1555px 312px #fff, 190px 1796px #fff, 1748px 1541px #fff, 685px 583px #fff, 1057px 1027px #fff, 1845px 349px #fff,
    1670px 1133px #fff, 1538px 519px #fff, 1551px 661px #fff, 780px 1693px #fff, 327px 1157px #fff, 1320px 741px #fff, 1597px 1552px #fff,
    675px 138px #fff, 1261px 152px #fff, 1819px 57px #fff, 1139px 71px #fff, 471px 1210px #fff, 141px 1384px #fff, 86px 910px #fff, 1172px 455px #fff,
    984px 16px #fff, 1868px 927px #fff, 973px 1429px #fff, 1120px 1271px #fff, 1803px 1477px #fff, 1147px 332px #fff, 1160px 1107px #fff,
    858px 1946px #fff, 1594px 1656px #fff, 724px 737px #fff, 149px 498px #fff, 1420px 1937px #fff, 1188px 854px #fff, 1380px 863px #fff,
    1683px 1423px #fff, 78px 1862px #fff, 1257px 347px #fff, 1683px 997px #fff, 1259px 760px #fff, 1710px 1015px #fff, 995px 1186px #fff,
    1609px 1351px #fff, 1437px 608px #fff, 455px 1856px #fff, 263px 427px #fff, 1232px 1967px #fff, 508px 1364px #fff, 1383px 1505px #fff,
    439px 1105px #fff, 1831px 298px #fff, 1737px 649px #fff, 1249px 1863px #fff, 938px 1654px #fff, 372px 932px #fff, 1809px 331px #fff,
    296px 1581px #fff, 59px 396px #fff, 1603px 792px #fff, 1899px 727px #fff, 1696px 1273px #fff, 1023px 1057px #fff, 1871px 1483px #fff,
    1467px 295px #fff, 1392px 1731px #fff, 1258px 1567px #fff, 1516px 1208px #fff, 1195px 1494px #fff, 235px 1052px #fff, 1348px 1593px #fff,
    1994px 1669px #fff, 1259px 1542px #fff, 1341px 169px #fff, 1852px 1420px #fff, 273px 355px #fff, 173px 232px #fff, 68px 1752px #fff,
    38px 577px #fff, 1503px 1970px #fff, 1882px 378px #fff, 168px 1243px #fff, 1591px 1490px #fff, 1716px 425px #fff, 841px 1270px #fff,
    1454px 1335px #fff;
  animation: animStar 150s linear infinite;
}
#stars3:after {
  content: ' ';
  position: absolute;
  top: 2000px;
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 602px 1443px #fff, 81px 1305px #fff, 76px 1257px #fff, 1923px 1172px #fff, 1385px 89px #fff, 1744px 416px #fff, 22px 120px #fff,
    372px 874px #fff, 1350px 939px #fff, 1989px 81px #fff, 363px 36px #fff, 812px 1008px #fff, 381px 1806px #fff, 134px 1711px #fff,
    1630px 1959px #fff, 1555px 312px #fff, 190px 1796px #fff, 1748px 1541px #fff, 685px 583px #fff, 1057px 1027px #fff, 1845px 349px #fff,
    1670px 1133px #fff, 1538px 519px #fff, 1551px 661px #fff, 780px 1693px #fff, 327px 1157px #fff, 1320px 741px #fff, 1597px 1552px #fff,
    675px 138px #fff, 1261px 152px #fff, 1819px 57px #fff, 1139px 71px #fff, 471px 1210px #fff, 141px 1384px #fff, 86px 910px #fff, 1172px 455px #fff,
    984px 16px #fff, 1868px 927px #fff, 973px 1429px #fff, 1120px 1271px #fff, 1803px 1477px #fff, 1147px 332px #fff, 1160px 1107px #fff,
    858px 1946px #fff, 1594px 1656px #fff, 724px 737px #fff, 149px 498px #fff, 1420px 1937px #fff, 1188px 854px #fff, 1380px 863px #fff,
    1683px 1423px #fff, 78px 1862px #fff, 1257px 347px #fff, 1683px 997px #fff, 1259px 760px #fff, 1710px 1015px #fff, 995px 1186px #fff,
    1609px 1351px #fff, 1437px 608px #fff, 455px 1856px #fff, 263px 427px #fff, 1232px 1967px #fff, 508px 1364px #fff, 1383px 1505px #fff,
    439px 1105px #fff, 1831px 298px #fff, 1737px 649px #fff, 1249px 1863px #fff, 938px 1654px #fff, 372px 932px #fff, 1809px 331px #fff,
    296px 1581px #fff, 59px 396px #fff, 1603px 792px #fff, 1899px 727px #fff, 1696px 1273px #fff, 1023px 1057px #fff, 1871px 1483px #fff,
    1467px 295px #fff, 1392px 1731px #fff, 1258px 1567px #fff, 1516px 1208px #fff, 1195px 1494px #fff, 235px 1052px #fff, 1348px 1593px #fff,
    1994px 1669px #fff, 1259px 1542px #fff, 1341px 169px #fff, 1852px 1420px #fff, 273px 355px #fff, 173px 232px #fff, 68px 1752px #fff,
    38px 577px #fff, 1503px 1970px #fff, 1882px 378px #fff, 168px 1243px #fff, 1591px 1490px #fff, 1716px 425px #fff, 841px 1270px #fff,
    1454px 1335px #fff;
}
</style>
