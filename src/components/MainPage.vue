<template>
  <div class="main">
    <!-- 로그인 창 -->
    <aside>
      <div class="login">
        <router-link to="/" class="logo"
          ><img src="../assets/everytime_logo.png" alt="에브리타임"
        /></router-link>
        <router-link to="/login" class="button login">로그인</router-link>
        <!-- <a href="/login" class="button login">로그인</a> -->
        <router-link to="/register" class="button register"
          >에브리타임 회원가입</router-link
        >
        <p class="find">
          <router-link to="/forgot">아이디/비밀번호 찾기</router-link>
        </p>
        <hr />
      </div>
      <!-- 검색바 -->
      <form class="search">
        <p>우리 학교 커뮤니티 둘러보기</p>
        <input
          type="text"
          name="name"
          placeholder="찾으시는 캠퍼스를 검색하세요."
          autocomplete="off"
        />
      </form>
      <!-- 대학교 목록 -->
      <div class="campuslist">
        <a href="https://khu.everytime.kr"
          ><span class="name">경희대</span
          ><span class="count">46,442명</span></a
        >
        <a href="https://cau.everytime.kr"
          ><span class="name">중앙대</span
          ><span class="count">41,067명</span></a
        >
        <a href="https://yonsei.everytime.kr"
          ><span class="name">연세대 신촌캠</span
          ><span class="count">39,892명</span></a
        >
        <a href="https://knu.everytime.kr"
          ><span class="name">경북대</span
          ><span class="count">38,140명</span></a
        >
        <a href="https://skku.everytime.kr"
          ><span class="name">성균관대</span
          ><span class="count">37,175명</span></a
        >
        <a href="https://korea.everytime.kr"
          ><span class="name">고려대 서울캠</span
          ><span class="count">35,572명</span></a
        >
        <a href="https://pusan.everytime.kr"
          ><span class="name">부산대</span
          ><span class="count">35,482명</span></a
        >
        <a href="https://dankook.everytime.kr"
          ><span class="name">단국대</span
          ><span class="count">34,931명</span></a
        >
        <a href="https://yu.everytime.kr"
          ><span class="name">영남대</span
          ><span class="count">33,996명</span></a
        >
        <a href="https://kmu.everytime.kr"
          ><span class="name">계명대</span
          ><span class="count">33,070명</span></a
        >
        <a href="https://snu.everytime.kr"
          ><span class="name">서울대</span
          ><span class="count">32,426명</span></a
        >
        <a href="https://kangwon.everytime.kr"
          ><span class="name">강원대</span
          ><span class="count">31,887명</span></a
        >
        <a href="https://jnu.everytime.kr"
          ><span class="name">전남대</span
          ><span class="count">31,561명</span></a
        >
        <a href="https://hanyang.everytime.kr"
          ><span class="name">한양대 서울캠</span
          ><span class="count">31,013명</span></a
        >
        <a href="https://jbnu.everytime.kr"
          ><span class="name">전북대</span
          ><span class="count">30,390명</span></a
        >
        <a href="https://donga.everytime.kr"
          ><span class="name">동아대</span
          ><span class="count">30,095명</span></a
        >
        <a href="https://hufs.everytime.kr"
          ><span class="name">한국외대</span
          ><span class="count">29,829명</span></a
        >
        <a href="https://gachon.everytime.kr"
          ><span class="name">가천대</span
          ><span class="count">29,395명</span></a
        >
        <a href="https://inha.everytime.kr"
          ><span class="name">인하대</span
          ><span class="count">29,378명</span></a
        >
        <a href="https://konkuk.everytime.kr"
          ><span class="name">건국대 서울캠</span
          ><span class="count">28,102명</span></a
        >
        <a href="https://ewha.everytime.kr"
          ><span class="name">이화여대</span
          ><span class="count">27,429명</span></a
        >
        <a href="https://cnu.everytime.kr"
          ><span class="name">충남대</span
          ><span class="count">26,882명</span></a
        >
        <a href="https://kookmin.everytime.kr"
          ><span class="name">국민대</span
          ><span class="count">26,193명</span></a
        >
        <a href="https://chosun.everytime.kr"
          ><span class="name">조선대</span
          ><span class="count">25,596명</span></a
        >
        <a href="https://daegu.everytime.kr"
          ><span class="name">대구대</span
          ><span class="count">24,990명</span></a
        >
        <a href="https://dongguk.everytime.kr"
          ><span class="name">동국대 서울캠</span
          ><span class="count">24,617명</span></a
        >
        <a href="https://pknu.everytime.kr"
          ><span class="name">부경대</span
          ><span class="count">24,199명</span></a
        >
        <a href="https://ssu.everytime.kr"
          ><span class="name">숭실대</span
          ><span class="count">23,854명</span></a
        >
        <a href="https://hongik.everytime.kr"
          ><span class="name">홍익대 서울캠</span
          ><span class="count">23,360명</span></a
        >
        <a href="https://kyonggi.everytime.kr"
          ><span class="name">경기대</span
          ><span class="count">22,328명</span></a
        >
        <a href="https://deu.everytime.kr"
          ><span class="name">동의대</span
          ><span class="count">22,254명</span></a
        >
        <a href="https://gnu.everytime.kr"
          ><span class="name">경상대</span
          ><span class="count">21,603명</span></a
        >
        <a href="https://mju.everytime.kr"
          ><span class="name">명지대</span
          ><span class="count">21,349명</span></a
        >
        <a href="https://chungbuk.everytime.kr"
          ><span class="name">충북대</span
          ><span class="count">21,011명</span></a
        >
        <a href="https://sejong.everytime.kr"
          ><span class="name">세종대</span
          ><span class="count">19,906명</span></a
        >
        <a href="https://inu.everytime.kr"
          ><span class="name">인천대</span
          ><span class="count">19,858명</span></a
        >
        <a href="https://ulsan.everytime.kr"
          ><span class="name">울산대</span
          ><span class="count">19,607명</span></a
        >
        <a href="https://wku.everytime.kr"
          ><span class="name">원광대</span
          ><span class="count">19,504명</span></a
        >
        <a href="https://sookmyung.everytime.kr"
          ><span class="name">숙명여대</span
          ><span class="count">19,447명</span></a
        >
        <a href="https://ks.everytime.kr"
          ><span class="name">경성대</span
          ><span class="count">18,528명</span></a
        >
        <a href="https://sungshin.everytime.kr"
          ><span class="name">성신여대</span
          ><span class="count">18,202명</span></a
        >
        <a href="https://bu.everytime.kr"
          ><span class="name">백석대</span
          ><span class="count">18,133명</span></a
        >
        <a href="https://cu.everytime.kr"
          ><span class="name">대구가톨릭대</span
          ><span class="count">17,720명</span></a
        >
        <a href="https://hoseo.everytime.kr"
          ><span class="name">호서대</span
          ><span class="count">17,650명</span></a
        >
        <a href="https://kongju.everytime.kr"
          ><span class="name">공주대</span
          ><span class="count">17,382명</span></a
        >
        <a href="https://ajou.everytime.kr"
          ><span class="name">아주대</span
          ><span class="count">17,014명</span></a
        >
        <a href="https://seoultech.everytime.kr"
          ><span class="name">서울과기대</span
          ><span class="count">16,081명</span></a
        >
        <a href="https://sch.everytime.kr"
          ><span class="name">순천향대</span
          ><span class="count">15,828명</span></a
        >
        <a href="https://hanyangerica.everytime.kr"
          ><span class="name">한양대 ERICA캠</span
          ><span class="count">15,716명</span></a
        >
        <a href="https://hannam.everytime.kr"
          ><span class="name">한남대</span
          ><span class="count">15,672명</span></a
        >
        <a href="https://uos.everytime.kr"
          ><span class="name">서울시립대</span
          ><span class="count">15,537명</span></a
        >
        <a href="https://kyungnam.everytime.kr"
          ><span class="name">경남대</span
          ><span class="count">15,151명</span></a
        >
        <a href="https://jejunu.everytime.kr"
          ><span class="name">제주대</span
          ><span class="count">15,113명</span></a
        >
        <a href="https://cju.everytime.kr"
          ><span class="name">청주대</span
          ><span class="count">15,002명</span></a
        >
        <a href="https://kw.everytime.kr"
          ><span class="name">광운대</span
          ><span class="count">14,787명</span></a
        >
        <a href="https://suwon.everytime.kr"
          ><span class="name">수원대</span
          ><span class="count">14,221명</span></a
        >
        <a href="https://sogang.everytime.kr"
          ><span class="name">서강대</span
          ><span class="count">13,943명</span></a
        >
        <a href="https://dongseo.everytime.kr"
          ><span class="name">동서대</span
          ><span class="count">13,662명</span></a
        >
        <a href="https://jj.everytime.kr"
          ><span class="name">전주대</span
          ><span class="count">13,516명</span></a
        >
        <a href="https://swu.everytime.kr"
          ><span class="name">서울여대</span
          ><span class="count">13,294명</span></a
        >
        <a href="https://inje.everytime.kr"
          ><span class="name">인제대</span
          ><span class="count">13,060명</span></a
        >
        <a href="https://catholic.everytime.kr"
          ><span class="name">가톨릭대</span
          ><span class="count">12,977명</span></a
        >
        <a href="https://nsu.everytime.kr"
          ><span class="name">남서울대</span
          ><span class="count">12,919명</span></a
        >
        <a href="https://hallym.everytime.kr"
          ><span class="name">한림대</span
          ><span class="count">12,412명</span></a
        >
        <a href="https://ut.everytime.kr"
          ><span class="name">한국교통대</span
          ><span class="count">12,345명</span></a
        >
        <a href="https://yonseiwonju.everytime.kr"
          ><span class="name">연세대 미래캠</span
          ><span class="count">12,187명</span></a
        >
        <a href="https://dju.everytime.kr"
          ><span class="name">대전대</span
          ><span class="count">12,124명</span></a
        >
        <a href="https://sunmoon.everytime.kr"
          ><span class="name">선문대</span
          ><span class="count">11,884명</span></a
        >
        <a href="https://kku.everytime.kr"
          ><span class="name">건국대 GLOCAL캠</span
          ><span class="count">11,798명</span></a
        >
        <a href="https://bau.everytime.kr"
          ><span class="name">백석예대</span
          ><span class="count">11,749명</span></a
        >
        <a href="https://gwnu.everytime.kr"
          ><span class="name">강릉원주대</span
          ><span class="count">11,743명</span></a
        >
        <a href="https://changwon.everytime.kr"
          ><span class="name">창원대</span
          ><span class="count">11,708명</span></a
        >
        <a href="https://daejin.everytime.kr"
          ><span class="name">대진대</span
          ><span class="count">11,362명</span></a
        >
        <a href="https://donggukgyeongju.everytime.kr"
          ><span class="name">동국대 경주캠</span
          ><span class="count">11,330명</span></a
        >
        <a href="https://dongduk.everytime.kr"
          ><span class="name">동덕여대</span
          ><span class="count">11,192명</span></a
        >
        <a href="https://bufs.everytime.kr"
          ><span class="name">부산외대</span
          ><span class="count">11,149명</span></a
        >
        <a href="https://cku.everytime.kr"
          ><span class="name">가톨릭관동대</span
          ><span class="count">11,080명</span></a
        >
        <a href="https://inhatc.everytime.kr"
          ><span class="name">인하공업전문대</span
          ><span class="count">11,024명</span></a
        >
        <a href="https://smu.everytime.kr"
          ><span class="name">상명대 서울캠</span
          ><span class="count">10,952명</span></a
        >
        <a href="https://hanbat.everytime.kr"
          ><span class="name">한밭대</span
          ><span class="count">10,931명</span></a
        >
        <a href="https://koreasejong.everytime.kr"
          ><span class="name">고려대 세종캠</span
          ><span class="count">10,858명</span></a
        >
        <a href="https://wsu.everytime.kr"
          ><span class="name">우송대</span
          ><span class="count">10,784명</span></a
        >
        <a href="https://mjc.everytime.kr"
          ><span class="name">명지전문대</span
          ><span class="count">10,704명</span></a
        >
        <a href="https://duksung.everytime.kr"
          ><span class="name">덕성여대</span
          ><span class="count">10,590명</span></a
        >
        <a href="https://hywoman.everytime.kr"
          ><span class="name">한양여대</span
          ><span class="count">10,502명</span></a
        >
        <a href="https://sunchon.everytime.kr"
          ><span class="name">순천대</span
          ><span class="count">10,347명</span></a
        >
        <a href="https://hansung.everytime.kr"
          ><span class="name">한성대</span
          ><span class="count">10,244명</span></a
        >
        <a href="https://kangnam.everytime.kr"
          ><span class="name">강남대</span
          ><span class="count">10,231명</span></a
        >
        <a href="https://hongiksejong.everytime.kr"
          ><span class="name">홍익대 세종캠</span
          ><span class="count">10,170명</span></a
        >
        <a href="https://joongbu.everytime.kr"
          ><span class="name">중부대</span
          ><span class="count">10,118명</span></a
        >
        <a href="https://kpu.everytime.kr"
          ><span class="name">한국산기대</span
          ><span class="count">10,056명</span></a
        >
        <a href="/c/250"><span class="name">ICT폴리텍대</span></a>
        <a href="https://kaist.everytime.kr"><span class="name">KAIST</span></a>
        <a href="https://kcu.everytime.kr"><span class="name">KC대</span></a>
        <a href="https://kaya.everytime.kr"><span class="name">가야대</span></a>
        <a href="/c/298"><span class="name">가톨릭상지대</span></a>
        <a href="/c/205"><span class="name">감리교신학대</span></a>
        <a href="https://gangdong.everytime.kr"
          ><span class="name">강동대</span></a
        >
        <a href="https://gyc.everytime.kr"
          ><span class="name">강릉영동대</span></a
        >
        <a href="/c/260"><span class="name">강원관광대</span></a>
        <a href="/c/254"><span class="name">강원도립대</span></a>
        <a href="/c/299"><span class="name">거제대</span></a>
        <a href="https://konyang.everytime.kr"
          ><span class="name">건양대</span></a
        >
        <a href="/c/415"><span class="name">건양사이버대</span></a>
        <a href="/c/429"><span class="name">겐트대</span></a>
        <a href="https://gtec.everytime.kr"
          ><span class="name">경기과기대</span></a
        >
        <a href="https://gntech.everytime.kr"
          ><span class="name">경남과기대</span></a
        >
        <a href="/c/300"><span class="name">경남도립거창대</span></a>
        <a href="/c/301"><span class="name">경남도립남해대</span></a>
        <a href="https://kit.everytime.kr"
          ><span class="name">경남정보대</span></a
        >
        <a href="https://kduniv.everytime.kr"
          ><span class="name">경동대</span></a
        >
        <a href="https://kyungmin.everytime.kr"
          ><span class="name">경민대</span></a
        >
        <a href="https://kbu.everytime.kr"><span class="name">경복대</span></a>
        <a href="/c/302"><span class="name">경북과학대</span></a>
        <a href="/c/303"><span class="name">경북도립대</span></a>
        <a href="https://gch.everytime.kr"
          ><span class="name">경북보건대</span></a
        >
        <a href="/c/304"><span class="name">경북전문대</span></a>
        <a href="https://ikw.everytime.kr"><span class="name">경운대</span></a>
        <a href="https://ginue.everytime.kr"
          ><span class="name">경인교대</span></a
        >
        <a href="https://kiwu.everytime.kr"
          ><span class="name">경인여대</span></a
        >
        <a href="https://kiu.everytime.kr"><span class="name">경일대</span></a>
        <a href="/c/151"><span class="name">경주대</span></a>
        <a href="/c/359"><span class="name">경찰대</span></a>
        <a href="/c/392"><span class="name">경희사이버대</span></a>
        <a href="https://kmcu.everytime.kr"
          ><span class="name">계명문화대</span></a
        >
        <a href="https://kaywon.everytime.kr"
          ><span class="name">계원예대</span></a
        >
        <a href="/c/278"><span class="name">고구려대</span></a>
        <a href="/c/393"><span class="name">고려사이버대</span></a>
        <a href="https://kosin.everytime.kr"
          ><span class="name">고신대</span></a
        >
        <a href="https://gjue.everytime.kr"
          ><span class="name">공주교대</span></a
        >
        <a href="/c/369"><span class="name">광신대</span></a>
        <a href="/c/351"><span class="name">광양보건대</span></a>
        <a href="/c/409"><span class="name">광주가톨릭대</span></a>
        <a href="/c/126"><span class="name">광주과기원</span></a>
        <a href="https://gnue.everytime.kr"
          ><span class="name">광주교대</span></a
        >
        <a href="https://gwangju.everytime.kr"
          ><span class="name">광주대</span></a
        >
        <a href="https://ghu.everytime.kr"
          ><span class="name">광주보건대</span></a
        >
        <a href="https://kwu.everytime.kr"
          ><span class="name">광주여대</span></a
        >
        <a href="/c/306"><span class="name">구미대</span></a>
        <a href="https://kookje.everytime.kr"
          ><span class="name">국제대</span></a
        >
        <a href="/c/416"><span class="name">국제사이버대</span></a>
        <a href="/c/375"><span class="name">국제예대</span></a>
        <a href="/c/279"><span class="name">군산간호대</span></a>
        <a href="https://kunsan.everytime.kr"
          ><span class="name">군산대</span></a
        >
        <a href="/c/280"><span class="name">군장대</span></a>
        <a href="https://kdu.everytime.kr"><span class="name">극동대</span></a>
        <a href="/c/395"><span class="name">글로벌사이버대</span></a>
        <a href="/c/106"><span class="name">금강대</span></a>
        <a href="https://kumoh.everytime.kr"
          ><span class="name">금오공대</span></a
        >
        <a href="https://ccn.everytime.kr"
          ><span class="name">기독간호대</span></a
        >
        <a href="https://gimcheon.everytime.kr"
          ><span class="name">김천대</span></a
        >
        <a href="https://kimpo.everytime.kr"
          ><span class="name">김포대</span></a
        >
        <a href="/c/308"><span class="name">김해대</span></a>
        <a href="/c/200"><span class="name">꽃동네대</span></a>
        <a href="https://kornu.everytime.kr"
          ><span class="name">나사렛대</span></a
        >
        <a href="https://nambu.everytime.kr"
          ><span class="name">남부대</span></a
        >
        <a href="/c/384"><span class="name">농협대</span></a>
        <a href="/c/309"><span class="name">대경대</span></a>
        <a href="/c/166"><span class="name">대구경북과기원</span></a>
        <a href="/c/324"><span class="name">대구공업대</span></a>
        <a href="https://tsu.everytime.kr"
          ><span class="name">대구과학대</span></a
        >
        <a href="https://dnue.everytime.kr"
          ><span class="name">대구교대</span></a
        >
        <a href="https://dhc.everytime.kr"
          ><span class="name">대구보건대</span></a
        >
        <a href="/c/394"><span class="name">대구사이버대</span></a>
        <a href="/c/336"><span class="name">대구예대</span></a>
        <a href="https://dhu.everytime.kr"
          ><span class="name">대구한의대</span></a
        >
        <a href="/c/265"><span class="name">대덕대</span></a>
        <a href="/c/330"><span class="name">대동대</span></a>
        <a href="https://daelim.everytime.kr"
          ><span class="name">대림대</span></a
        >
        <a href="/c/368"><span class="name">대신대</span></a>
        <a href="/c/264"><span class="name">대원대</span></a>
        <a href="/c/410"><span class="name">대전가톨릭대</span></a>
        <a href="https://dst.everytime.kr"
          ><span class="name">대전과기대</span></a
        >
        <a href="https://hit.everytime.kr"
          ><span class="name">대전보건대</span></a
        >
        <a href="/c/411"><span class="name">대전신학대</span></a>
        <a href="/c/287"><span class="name">동강대</span></a>
        <a href="https://dongnam.everytime.kr"
          ><span class="name">동남보건대</span></a
        >
        <a href="https://tongmyong.everytime.kr"
          ><span class="name">동명대</span></a
        >
        <a href="https://dongseoul.everytime.kr"
          ><span class="name">동서울대</span></a
        >
        <a href="https://dsu.everytime.kr"><span class="name">동신대</span></a>
        <a href="https://dima.everytime.kr"
          ><span class="name">동아방송예대</span></a
        >
        <a href="/c/281"><span class="name">동아보건대</span></a>
        <a href="https://dyu.everytime.kr"><span class="name">동양대</span></a>
        <a href="https://dongyang.everytime.kr"
          ><span class="name">동양미래대</span></a
        >
        <a href="/c/311"><span class="name">동원과기대</span></a>
        <a href="/c/232"><span class="name">동원대</span></a>
        <a href="https://dit.everytime.kr"
          ><span class="name">동의과학대</span></a
        >
        <a href="/c/345"><span class="name">동주대</span></a>
        <a href="/c/233"><span class="name">두원공대</span></a>
        <a href="/c/383"><span class="name">디지털서울문화예대</span></a>
        <a href="/c/376"><span class="name">라사라패션직업전문학교</span></a>
        <a href="/c/172"><span class="name">루터대</span></a>
        <a href="https://masan.everytime.kr"
          ><span class="name">마산대</span></a
        >
        <a href="https://mokwon.everytime.kr"
          ><span class="name">목원대</span></a
        >
        <a href="/c/214"><span class="name">목포가톨릭대</span></a>
        <a href="/c/282"><span class="name">목포과학대</span></a>
        <a href="https://mokpo.everytime.kr"
          ><span class="name">목포대</span></a
        >
        <a href="/c/136"><span class="name">목포해양대</span></a>
        <a href="/c/346"><span class="name">문경대</span></a>
        <a href="https://pcu.everytime.kr"><span class="name">배재대</span></a>
        <a href="https://baewha.everytime.kr"
          ><span class="name">배화여대</span></a
        >
        <a href="https://bscu.everytime.kr"
          ><span class="name">백석문화대</span></a
        >
        <a href="/c/283"><span class="name">백제예대</span></a>
        <a href="https://cup.everytime.kr"
          ><span class="name">부산가톨릭대</span></a
        >
        <a href="/c/333"><span class="name">부산경상대</span></a>
        <a href="https://bist.everytime.kr"
          ><span class="name">부산과기대</span></a
        >
        <a href="https://bnue.everytime.kr"
          ><span class="name">부산교대</span></a
        >
        <a href="/c/417"><span class="name">부산디지털대</span></a>
        <a href="https://bwc.everytime.kr"
          ><span class="name">부산여대</span></a
        >
        <a href="/c/348"><span class="name">부산예대</span></a>
        <a href="/c/158"><span class="name">부산장신대</span></a>
        <a href="https://bucheon.everytime.kr"
          ><span class="name">부천대</span></a
        >
        <a href="/c/418"><span class="name">사이버한국외대</span></a>
        <a href="https://syu.everytime.kr"><span class="name">삼육대</span></a>
        <a href="https://shu.everytime.kr"
          ><span class="name">삼육보건대</span></a
        >
        <a href="https://smuc.everytime.kr"
          ><span class="name">상명대 천안캠</span></a
        >
        <a href="https://sangji.everytime.kr"
          ><span class="name">상지대</span></a
        >
        <a href="https://skuniv.everytime.kr"
          ><span class="name">서경대</span></a
        >
        <a href="/c/313"><span class="name">서라벌대</span></a>
        <a href="https://seoyeong.everytime.kr"
          ><span class="name">서영대</span></a
        >
        <a href="https://snue.everytime.kr"
          ><span class="name">서울교대</span></a
        >
        <a href="/c/64"><span class="name">서울기독대</span></a>
        <a href="/c/419"><span class="name">서울디지털대</span></a>
        <a href="/c/389"><span class="name">서울사이버대</span></a>
        <a href="https://stu.everytime.kr"
          ><span class="name">서울신학대</span></a
        >
        <a href="https://snjc.everytime.kr"
          ><span class="name">서울여자간호대</span></a
        >
        <a href="https://seoularts.everytime.kr"
          ><span class="name">서울예대</span></a
        >
        <a href="/c/361"><span class="name">서울장신대</span></a>
        <a href="https://hytu.everytime.kr"
          ><span class="name">서울한영대</span></a
        >
        <a href="/c/377"><span class="name">서울현대전문학교</span></a>
        <a href="/c/378"><span class="name">서울호텔종합전문학교</span></a>
        <a href="https://seowon.everytime.kr"
          ><span class="name">서원대</span></a
        >
        <a href="https://seoil.everytime.kr"
          ><span class="name">서일대</span></a
        >
        <a href="https://seojeong.everytime.kr"
          ><span class="name">서정대</span></a
        >
        <a href="/c/284"><span class="name">서해대</span></a>
        <a href="https://sunlin.everytime.kr"
          ><span class="name">선린대</span></a
        >
        <a href="https://sungkyul.everytime.kr"
          ><span class="name">성결대</span></a
        >
        <a href="https://skhu.everytime.kr"
          ><span class="name">성공회대</span></a
        >
        <a href="/c/314"><span class="name">성운대</span></a>
        <a href="/c/382"><span class="name">세경대</span></a>
        <a href="https://semyung.everytime.kr"
          ><span class="name">세명대</span></a
        >
        <a href="/c/390"><span class="name">세종사이버대</span></a>
        <a href="https://sehan.everytime.kr"
          ><span class="name">세한대</span></a
        >
        <a href="/c/256"><span class="name">송곡대</span></a>
        <a href="https://songwon.everytime.kr"
          ><span class="name">송원대</span></a
        >
        <a href="/c/257"><span class="name">송호대</span></a>
        <a href="/c/327"><span class="name">수성대</span></a>
        <a href="/c/412"><span class="name">수원가톨릭대</span></a>
        <a href="https://ssc.everytime.kr"
          ><span class="name">수원과학대</span></a
        >
        <a href="https://swc.everytime.kr"
          ><span class="name">수원여대</span></a
        >
        <a href="/c/420"><span class="name">순복음총회신학교</span></a>
        <a href="/c/285"><span class="name">순천제일대</span></a>
        <a href="/c/421"><span class="name">숭실사이버대</span></a>
        <a href="https://sewc.everytime.kr"
          ><span class="name">숭의여대</span></a
        >
        <a href="/c/362"><span class="name">신경대</span></a>
        <a href="https://shingu.everytime.kr"
          ><span class="name">신구대</span></a
        >
        <a href="https://silla.everytime.kr"
          ><span class="name">신라대</span></a
        >
        <a href="https://shinsung.everytime.kr"
          ><span class="name">신성대</span></a
        >
        <a href="https://sau.everytime.kr"
          ><span class="name">신안산대</span></a
        >
        <a href="https://shinhan.everytime.kr"
          ><span class="name">신한대</span></a
        >
        <a href="/c/363"><span class="name">아세아연합신학대</span></a>
        <a href="/c/269"><span class="name">아주자동차대</span></a>
        <a href="https://asc.everytime.kr"
          ><span class="name">안동과학대</span></a
        >
        <a href="https://andong.everytime.kr"
          ><span class="name">안동대</span></a
        >
        <a href="https://ansan.everytime.kr"
          ><span class="name">안산대</span></a
        >
        <a href="https://anyang.everytime.kr"
          ><span class="name">안양대</span></a
        >
        <a href="https://yit.everytime.kr"><span class="name">여주대</span></a>
        <a href="https://yeonsung.everytime.kr"
          ><span class="name">연성대</span></a
        >
        <a href="/c/316"><span class="name">연암공대</span></a>
        <a href="/c/270"><span class="name">연암대</span></a>
        <a href="/c/387"><span class="name">영남신학대</span></a>
        <a href="/c/317"><span class="name">영남외대</span></a>
        <a href="https://ync.everytime.kr"
          ><span class="name">영남이공대</span></a
        >
        <a href="https://ysu.everytime.kr"><span class="name">영산대</span></a>
        <a href="/c/413"><span class="name">영산선학대</span></a>
        <a href="/c/422"><span class="name">영진사이버대</span></a>
        <a href="https://yju.everytime.kr"
          ><span class="name">영진전문대</span></a
        >
        <a href="/c/386"><span class="name">예수대</span></a>
        <a href="https://yewon.everytime.kr"
          ><span class="name">예원예대</span></a
        >
        <a href="https://osan.everytime.kr"><span class="name">오산대</span></a>
        <a href="https://yongin.everytime.kr"
          ><span class="name">용인대</span></a
        >
        <a href="https://ysc.everytime.kr"
          ><span class="name">용인송담대</span></a
        >
        <a href="https://woosuk.everytime.kr"
          ><span class="name">우석대</span></a
        >
        <a href="https://wsi.everytime.kr"
          ><span class="name">우송정보대</span></a
        >
        <a href="/c/337"><span class="name">울산과기원</span></a>
        <a href="https://uc.everytime.kr"
          ><span class="name">울산과학대</span></a
        >
        <a href="https://wat.everytime.kr"
          ><span class="name">웅지세무대</span></a
        >
        <a href="/c/423"><span class="name">원광디지털대</span></a>
        <a href="https://wu.everytime.kr"
          ><span class="name">원광보건대</span></a
        >
        <a href="https://uiduk.everytime.kr"
          ><span class="name">위덕대</span></a
        >
        <a href="/c/115"><span class="name">유원대</span></a>
        <a href="/c/430"><span class="name">유타대</span></a>
        <a href="https://yuhan.everytime.kr"
          ><span class="name">유한대</span></a
        >
        <a href="https://eulji.everytime.kr"
          ><span class="name">을지대</span></a
        >
        <a href="https://induk.everytime.kr"
          ><span class="name">인덕대</span></a
        >
        <a href="https://iccu.everytime.kr"
          ><span class="name">인천가톨릭대</span></a
        >
        <a href="https://jeiu.everytime.kr"
          ><span class="name">인천재능대</span></a
        >
        <a href="/c/192"><span class="name">장로회신학대</span></a>
        <a href="https://jangan.everytime.kr"
          ><span class="name">장안대</span></a
        >
        <a href="/c/290"><span class="name">전남과학대</span></a>
        <a href="/c/291"><span class="name">전남도립대</span></a>
        <a href="/c/292"><span class="name">전북과학대</span></a>
        <a href="https://jnue.everytime.kr"
          ><span class="name">전주교대</span></a
        >
        <a href="/c/293"><span class="name">전주기전대</span></a>
        <a href="/c/294"><span class="name">전주비전대</span></a>
        <a href="/c/424"><span class="name">정석대</span></a>
        <a href="https://jeonghwa.everytime.kr"
          ><span class="name">정화예대</span></a
        >
        <a href="/c/261"><span class="name">제주관광대</span></a>
        <a href="/c/145"><span class="name">제주국제대</span></a>
        <a href="https://chu.everytime.kr"
          ><span class="name">제주한라대</span></a
        >
        <a href="/c/297"><span class="name">조선간호대</span></a>
        <a href="/c/288"><span class="name">조선이공대</span></a>
        <a href="/c/414"><span class="name">중앙승가대</span></a>
        <a href="https://jwu.everytime.kr"><span class="name">중원대</span></a>
        <a href="https://cue.everytime.kr"
          ><span class="name">진주교대</span></a
        >
        <a href="https://jhc.everytime.kr"
          ><span class="name">진주보건대</span></a
        >
        <a href="https://cha.everytime.kr"
          ><span class="name">차의과학대</span></a
        >
        <a href="/c/163"><span class="name">창신대</span></a>
        <a href="/c/320"><span class="name">창원문성대</span></a>
        <a href="https://ck.everytime.kr"
          ><span class="name">청강문화산업대</span></a
        >
        <a href="/c/295"><span class="name">청암대</span></a>
        <a href="https://chungwoon.everytime.kr"
          ><span class="name">청운대</span></a
        >
        <a href="https://cje.everytime.kr"
          ><span class="name">청주교대</span></a
        >
        <a href="/c/130"><span class="name">초당대</span></a>
        <a href="https://chongshin.everytime.kr"
          ><span class="name">총신대</span></a
        >
        <a href="https://chugye.everytime.kr"
          ><span class="name">추계예대</span></a
        >
        <a href="https://cnue.everytime.kr"
          ><span class="name">춘천교대</span></a
        >
        <a href="https://choonhae.everytime.kr"
          ><span class="name">춘해보건대</span></a
        >
        <a href="/c/271"><span class="name">충남도립대</span></a>
        <a href="/c/354"><span class="name">충북도립대</span></a>
        <a href="/c/272"><span class="name">충북보건과학대</span></a>
        <a href="/c/273"><span class="name">충청대</span></a>
        <a href="/c/210"><span class="name">침례신학대</span></a>
        <a href="/c/366"><span class="name">칼빈대</span></a>
        <a href="https://ptu.everytime.kr"><span class="name">평택대</span></a>
        <a href="/c/164"><span class="name">포항공대</span></a>
        <a href="/c/321"><span class="name">포항대</span></a>
        <a href="https://hknu.everytime.kr"><span class="name">한경대</span></a>
        <a href="/c/258"><span class="name">한국골프대</span></a>
        <a href="/c/372"><span class="name">한국관광대</span></a>
        <a href="/c/203"><span class="name">한국교원대</span></a>
        <a href="https://iuk.everytime.kr"
          ><span class="name">한국국제대</span></a
        >
        <a href="https://koreatech.everytime.kr"
          ><span class="name">한국기술교대</span></a
        >
        <a href="/c/248"><span class="name">한국농수산대</span></a>
        <a href="/c/388"><span class="name">한국뉴욕주립대</span></a>
        <a href="/c/379"><span class="name">한국방송통신대</span></a>
        <a href="/c/249"><span class="name">한국복지대</span></a>
        <a href="/c/425"><span class="name">한국복지사이버대</span></a>
        <a href="https://bible.everytime.kr"
          ><span class="name">한국성서대</span></a
        >
        <a href="/c/322"><span class="name">한국승강기대</span></a>
        <a href="/c/396"><span class="name">한국열린사이버대</span></a>
        <a href="https://pro.everytime.kr"
          ><span class="name">한국영상대</span></a
        >
        <a href="https://karts.everytime.kr"
          ><span class="name">한국예술종합학교</span></a
        >
        <a href="/c/371"><span class="name">한국전통문화대</span></a>
        <a href="/c/428"><span class="name">한국조지메이슨대</span></a>
        <a href="/c/61"><span class="name">한국체대</span></a>
        <a href="/c/380"><span class="name">한국폴리텍대</span></a>
        <a href="https://kau.everytime.kr"
          ><span class="name">한국항공대</span></a
        >
        <a href="https://kmou.everytime.kr"
          ><span class="name">한국해양대</span></a
        >
        <a href="https://handong.everytime.kr"
          ><span class="name">한동대</span></a
        >
        <a href="https://halla.everytime.kr"
          ><span class="name">한라대</span></a
        >
        <a href="/c/370"><span class="name">한려대</span></a>
        <a href="https://hsc.everytime.kr"
          ><span class="name">한림성심대</span></a
        >
        <a href="https://hanseo.everytime.kr"
          ><span class="name">한서대</span></a
        >
        <a href="https://hansei.everytime.kr"
          ><span class="name">한세대</span></a
        >
        <a href="https://hs.everytime.kr"><span class="name">한신대</span></a>
        <a href="/c/391"><span class="name">한양사이버대</span></a>
        <a href="/c/296"><span class="name">한영대</span></a>
        <a href="/c/199"><span class="name">한일장신대</span></a>
        <a href="https://uhs.everytime.kr"><span class="name">협성대</span></a>
        <a href="https://hyejeon.everytime.kr"
          ><span class="name">혜전대</span></a
        >
        <a href="https://honam.everytime.kr"
          ><span class="name">호남대</span></a
        >
        <a href="/c/385"><span class="name">호남신학대</span></a>
        <a href="/c/305"><span class="name">호산대</span></a>
        <a href="/c/131"><span class="name">호원대</span></a>
        <a href="/c/427"><span class="name">화신사이버대</span></a>
      </div>
    </aside>
    <!-- 좌측 상단 -->
    <section class="init">
      <div class="wrap">
        <h1>대학 생활을 더 편하고 즐겁게,<br /><strong>에브리타임</strong></h1>
        <div class="stores">
          <a href="/page/mlink?lid=web_about&store=playstore"
            ><img
              src="../assets/playstore.png"
              alt="에브리타임 - Play Store - Google"
          /></a>
          <a href="/page/mlink?lid=web_about&store=appstore"
            ><img
              src="../assets/appstore.png"
              alt="에브리타임 - AppStore - Apple"
          /></a>
        </div>
        <hr />
        <div class="device">
          <div class="screen">
            <div class="image home"></div>
            <div class="image timetable"></div>
            <div class="image board"></div>
          </div>
        </div>
      </div>
    </section>
    <!-- 좌측 중간 1 -->
    <section class="service white">
      <h2>
        350만 대학생을 위한<br /><strong
          >국내 1위 대학생 서비스 에브리타임!</strong
        >
      </h2>
      <div class="paragraph">
        <p>
          시간표 작성, 수업 일정 및 할일 등 편리한 <strong>학업 관리</strong>가
          가능하고,<br />학식 등 유용한 <strong>학교 생활 정보</strong>를 접할
          수 있으며,<br />같은 캠퍼스의 학생들과 소통하는
          <strong>익명 커뮤니티</strong>를 이용할 수 있습니다.
        </p>
      </div>
      <div class="figures">
        <div>
          <p class="number">
            <strong data-number="522">522</strong><span>만</span>
          </p>
          <p class="description">가입한 대학생</p>
        </div>
        <hr />
        <div>
          <p class="number">
            <strong data-number="2942">2,942</strong><span>만</span>
          </p>
          <p class="description">만들어진 시간표</p>
        </div>
        <hr />
        <div>
          <p class="number">
            <strong data-number="385">385</strong><span>만</span>
          </p>
          <p class="description">강의평/시험정보</p>
        </div>
        <hr />
        <div>
          <p class="number">
            <strong data-number="181">181</strong><span>만</span>
          </p>
          <p class="description">중고 거래된 책</p>
        </div>
        <hr />
        <div>
          <p class="number">
            <strong data-number="11">11</strong><span>억</span
            ><strong data-number="9206">9,206</strong><span>만</span>
          </p>
          <p class="description">작성된 게시물</p>
        </div>
      </div>
    </section>
    <!-- 좌측 중간 2 -->
    <section class="community">
      <h2>
        전국 396개 캠퍼스<br /><strong>재학생 커뮤니티 에브리타임!</strong>
      </h2>
      <div class="paragraph">
        <p>
          학교 인증을 거친 재학생들의 안전한 대화를 위한
          <strong>익명 시스템</strong>과<br />학생들이 직접 게시판을 개설하여
          운영하는 <strong>커뮤니티 플랫폼</strong>을 통해<br />많은 대학교에서
          가장 활발히 이용하는 재학생 커뮤니티로 자리잡았습니다.
        </p>
      </div>
      <div class="figures">
        <div>
          <p class="icon"><img src="../assets/icon.authorized.png" /></p>
          <p class="description">철저한 학교 인증</p>
        </div>
        <div>
          <p class="icon"><img src="../assets/icon.anonymous.png" /></p>
          <p class="description">완벽한 익명 시스템</p>
        </div>
        <div>
          <p class="icon"><img src="../assets/icon.users.png" /></p>
          <p class="description">재학생 운영 게시판</p>
        </div>
      </div>
    </section>
    <!-- 좌측 하단 -->
    <section class="footer white">
      <ul class="links">
        <li><a href="/page/serviceagreement">이용약관</a></li>
        <li class="privacy"><a href="/page/privacy">개인정보처리방침</a></li>
        <li><a href="/page/faq">문의하기</a></li>
        <li class="copyright"><a href="/">&copy; 에브리타임</a></li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@charset "utf-8";
@font-face {
  font-family: 'NanumSquare';
  src: url('../fonts/NanumSquareR.eot');
  src: url('../fonts/NanumSquareR.ttf') format('truetype');
}
@font-face {
  font-family: 'NanumSquareEB';
  src: url('../fonts/NanumSquareEB.eot');
  src: url('../fonts/NanumSquareEB.ttf') format('truetype');
}

* {
  margin: 0;
  padding: 0;
  border: 0;
  font-weight: normal;
}
body {
  letter-spacing: -0.5px;
  background-color: #f5f5f5;
}
a {
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
hr {
  clear: both;
  height: 0;
  border: 0;
}
img {
  vertical-align: middle;
}
ul {
  list-style-type: none;
}
aside,
section {
  display: block;
  background-color: #f5f5f5;
}

aside {
  position: fixed;
  z-index: 9;
  right: 0;
  top: 0;
  height: 100%;
  overflow-y: auto;
  -ms-overflow-style: none;
  border-left: 1px solid #d6d6d6;
  font-family: '맑은 고딕', '돋움', 'Apple SD Gothic Neo', sans-serif;
  background-color: #fff;
}
aside::-webkit-scrollbar {
  display: none;
}
aside > div.login {
  position: fixed;
  z-index: 11;
  top: 0;
  box-sizing: border-box;
  border-bottom: 1px solid #d6d6d6;
  background-color: #fff;
}
aside > div.login > a.logo {
  display: block;
  text-align: center;
}
aside > div.login > a.button {
  display: block;
  margin-bottom: 5px;
  height: 40px;
  line-height: 40px;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
}
aside > div.login > a.button.login {
  border: 1px solid #e3e3e3;
  color: #737373;
}
aside > div.login > a.button.register {
  color: #fff;
  background-color: #c62917;
}
aside > div.login > p {
  padding: 5px 5px 0 5px;
  width: 50%;
  box-sizing: border-box;
}
aside > div.login > p.find {
  float: right;
  text-align: right;
}
aside > div.login > p.find > a {
  height: 15px;
  line-height: 15px;
  color: #444444;
  font-size: 12px;
  cursor: pointer;
}
aside > form.search {
  position: fixed;
  z-index: 11;
  padding: 5px;
  box-sizing: border-box;
  border-bottom: 1px solid #e3e3e3;
  background-color: #fff;
}
aside > form.search > p {
  padding: 10px;
  line-height: 20px;
  color: #292929;
  font-size: 14px;
  font-weight: bold;
}
aside > form.search > input {
  padding: 0 35px 0 10px;
  width: 100%;
  height: 40px;
  line-height: 20px;
  box-sizing: border-box;
  border: 1px solid #e3e3e3;
  color: #444444;
  font-size: 14px;
  background: #f2f2f2 url('../assets/search.png') no-repeat right 10px center;
  background-size: 15px 15px;
}
aside > form.search > input:focus {
  outline: none;
}
aside > form.search > input::-ms-clear {
  display: none;
}
aside > div.campuslist {
  position: relative;
  z-index: 10;
}
aside > div.campuslist > a {
  display: block;
  padding: 0 15px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  box-sizing: border-box;
  border-bottom: 1px solid #e3e3e3;
}
aside > div.campuslist > a:hover {
  background-color: #f5f5f5;
}
aside > div.campuslist > a > span.name {
  color: #444444;
  font-size: 14px;
}
aside > div.campuslist > a > span.count {
  float: right;
  color: #a6a6a6;
  font-size: 12px;
}

section {
  width: 100%;
  box-sizing: border-box;
  word-break: break-all;
  font-family: NanumSquare;
  text-align: center;
}
section.white {
  background-color: #fff;
}
section.init > div.wrap {
  position: relative;
  margin: 0 auto;
}
section.init > div.wrap > div.device {
  box-sizing: border-box;
}
section.init > div.wrap > div.device > div.screen {
  position: relative;
  z-index: 1;
  border: 2px solid #d6d6d6;
  border-bottom: 0;
  border-radius: 18px 18px 0 0;
  background-color: #fff;
  overflow: hidden;
}
section.init > div.wrap > div.device > div.screen > div.image {
  position: absolute;
  background: transparent url('../assets/screen.png') no-repeat;
}
section.init > div.wrap > div.stores {
  font-size: 0;
}
section.init > div.wrap > div.stores > a {
  display: inline-block;
  border: 1px solid #d6d6d6;
  border-radius: 6px;
}
section.init > div.wrap > div.stores > a:first-child {
  margin-right: 5px;
}
section.footer > ul.links {
  padding: 16px 0;
  font-size: 0;
}
section.footer > ul.links > li {
  display: inline-block;
}
section.footer > ul.links > li > a {
  display: inline-block;
  line-height: 20px;
  color: #737373;
}
section.footer > ul.links > li.copyright > a,
section.footer > ul.links > li.privacy > a {
  font-family: NanumSquareEB;
}
section h1,
section h2 {
  color: #292929;
}
section h1 > strong,
section h2 > strong {
  color: #c62917;
  font-family: NanumSquareEB;
}
section div.paragraph > p {
  color: #444444;
}
section div.paragraph > p > strong {
  font-family: NanumSquareEB;
}
section div.figures {
  font-size: 0;
}
section div.figures > div {
  display: inline-block;
}
section div.figures > div > p.number {
  color: #292929;
  font-family: NanumSquareEB;
}
section div.figures > div > p.number > strong {
  display: inline-block;
  margin-left: 8px;
  letter-spacing: -2px;
}
section div.figures > div > p.number > strong:first-child {
  margin-left: 0;
}
section div.figures > div > p.number > span {
  display: inline-block;
  margin-left: 4px;
}
section div.figures > div > p.description {
  color: #444444;
}
section div.figures > div > p.icon {
  margin: 0 auto;
  border-radius: 50px;
  background-color: #fff;
}

section.init > div.wrap > div.device > div.screen > div.home {
  opacity: 1;
}
section.init > div.wrap > div.device > div.screen > div.timetable {
  opacity: 0;
  animation: active-init-timetable 6s infinite;
}
section.init > div.wrap > div.device > div.screen > div.board {
  opacity: 0;
  animation: active-init-board 6s infinite;
}
@keyframes active-init-timetable {
  0% {
    opacity: 0;
  }
  26% {
    opacity: 0;
  }
  34% {
    opacity: 1;
  }
  67% {
    opacity: 1;
  }
  68% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes active-init-board {
  0% {
    opacity: 0;
  }
  59% {
    opacity: 0;
  }
  67% {
    opacity: 1;
  }
  92% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

section.community > div.figures.active > div > p.icon > img {
  -webkit-animation: active-community 1s ease-out;
  animation: active-community 1s ease-out;
}
section.community > div.figures.active > div:nth-of-type(1) > p.icon > img {
  -webkit-animation-duration: 0.6s;
  animation-duration: 0.6s;
}
section.community > div.figures.active > div:nth-of-type(2) > p.icon > img {
  -webkit-animation-duration: 0.8s;
  animation-duration: 0.8s;
}
section.community > div.figures.active > div:nth-of-type(3) > p.icon > img {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
}
@-webkit-keyframes active-community {
  0% {
    opacity: 0;
    -webkit-transform: translateY(20px);
  }
  50% {
    opacity: 0;
    -webkit-transform: translateY(20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0px);
  }
}
@keyframes active-community {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  50% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

@media only screen and (min-width: 1281px) {
  section.init > div.wrap {
    width: 774px;
    height: 662px;
  }
  section.init > div.wrap > div.device {
    top: 120px;
    left: 0;
  }
  section.init > div.wrap > h1 {
    top: 306px;
    left: 394px;
    width: 380px;
  }
  section.init > div.wrap > div.stores {
    top: 416px;
    left: 394px;
  }
  section h1,
  section h2 {
    line-height: 35px;
    font-size: 28px;
  }
  section h2 {
    padding: 120px 0 40px 0;
  }
  section div.paragraph {
    padding-bottom: 80px;
  }
  section div.paragraph > p {
    line-height: 28px;
    font-size: 18px;
  }
  section div.figures {
    padding-bottom: 120px;
  }
  section div.figures > div {
    margin: 0 48px;
  }
  section div.figures > div > p.number > strong {
    font-size: 38px;
  }
  section div.figures > div > p.number > span {
    font-size: 18px;
  }
  section div.figures > div > p.description {
    margin-top: 10px;
    font-size: 16px;
  }
  section div.figures > hr {
    margin: 0 -24px 25px -24px;
    height: 20px;
  }
  section div.figures > div > p.icon {
    width: 100px;
    height: 100px;
    line-height: 100px;
  }
  section div.figures > div > p.icon > img {
    height: 48px;
  }
}

@media only screen and (min-width: 991px) and (max-width: 1280px) {
  section.init > div.wrap {
    width: 674px;
    height: 622px;
  }
  section.init > div.wrap > h1 {
    top: 271px;
    left: 354px;
    width: 320px;
  }
  section.init > div.wrap > div.stores {
    top: 371px;
    left: 354px;
  }
  section.init > div.wrap > div.device {
    top: 80px;
    left: 0;
  }
  section h1,
  section h2 {
    line-height: 30px;
    font-size: 24px;
  }
  section h2 {
    padding: 80px 0 30px 0;
  }
  section div.paragraph {
    padding-bottom: 60px;
  }
  section div.paragraph > p {
    line-height: 25px;
    font-size: 16px;
  }
  section div.figures {
    padding-bottom: 80px;
  }
  section div.figures > div {
    margin: 0 36px;
  }
  section div.figures > div > p.number > strong {
    font-size: 32px;
  }
  section div.figures > div > p.number > span {
    font-size: 16px;
  }
  section div.figures > div > p.description {
    margin-top: 10px;
    font-size: 14px;
  }
  section div.figures > hr {
    margin: 0 -12px 20px -12px;
    height: 20px;
  }
  section div.figures > div > p.icon {
    width: 80px;
    height: 80px;
    line-height: 80px;
  }
  section div.figures > div > p.icon > img {
    height: 32px;
  }
}

@media only screen and (min-width: 991px) {
  div.mobile {
    display: none;
  }
  aside {
    width: 300px;
  }
  aside > div.login {
    padding: 40px 15px;
    width: 300px;
    height: 270px;
  }
  aside > div.login > a.logo {
    margin-bottom: 40px;
  }
  aside > div.login > a.logo > img {
    height: 30px;
  }
  aside > form.search {
    top: 270px;
    width: 300px;
  }
  aside > div.campuslist {
    top: 361px;
  }
  section {
    padding-right: 301px;
  }
  section.init > div.wrap > h1 {
    position: absolute;
    text-align: left;
  }
  section.init > div.wrap > div.stores {
    position: absolute;
  }
  section.init > div.wrap > div.stores > a {
    padding: 0 15px;
    height: 58px;
    line-height: 58px;
  }
  section.init > div.wrap > div.stores > a > img {
    height: 30px;
  }
  section.init > div.wrap > div.device {
    position: absolute;
  }
  section.init > div.wrap > div.device > div.screen {
    width: 270px;
    height: 540px;
  }
  section.init > div.wrap > div.device > div.screen > div.image {
    background-size: 840px auto;
  }
  section.init > div.wrap > div.device > div.screen > div.home {
    top: 0;
    width: 270px;
    height: 540px;
    background-position: 0px 0px;
  }
  section.init > div.wrap > div.device > div.screen > div.timetable {
    top: 0;
    width: 270px;
    height: 540px;
    background-position: -285px 0px;
  }
  section.init > div.wrap > div.device > div.screen > div.board {
    top: 0;
    width: 270px;
    height: 540px;
    background-position: -570px 0px;
  }
  section.footer > ul.links > li > a {
    margin: 0 8px;
    font-size: 13px;
  }
  section div.figures > hr {
    display: inline-block;
    border-right: 2px solid #d6d6d6;
  }
}

@media only screen and (max-width: 990px) {
  div.mobile {
    padding: 10px;
    border-bottom: 1px solid #e3e3e3;
    background-color: #fff;
  }
  div.mobile > img.logo {
    float: left;
    margin: 4px;
    height: 20px;
  }
  div.mobile > a {
    float: right;
    padding: 0 8px;
    line-height: 28px;
    border-radius: 3px;
    color: #fff;
    font-size: 12px;
    background-color: #c62917;
  }
  aside {
    display: none;
  }
  aside.visible {
    display: block;
  }
  aside,
  aside > div.login {
    width: 100%;
  }
  aside > div.login {
    padding: 30px 15px;
    height: 255px;
  }
  aside > div.login > a.logo {
    margin-bottom: 15px;
  }
  aside > div.login > a.logo > img {
    height: 60px;
  }
  aside > form.search {
    display: none;
  }
  aside > div.campuslist {
    top: 255px;
  }
  section.init > div.wrap > h1 {
    padding: 50px 0 20px 0;
  }
  section.init > div.wrap > div.stores {
    padding-bottom: 20px;
  }
  section.init > div.wrap > div.stores > a {
    padding: 0 15px;
    height: 38px;
    line-height: 38px;
  }
  section.init > div.wrap > div.stores > a > img {
    height: 20px;
  }
  section.init > div.wrap > div.device {
    margin: 0 auto;
    width: 184px;
    height: 362px;
  }
  section.init > div.wrap > div.device > div.screen {
    width: 180px;
    height: 360px;
  }
  section.init > div.wrap > div.device > div.screen > div.image {
    background-size: 560px auto;
  }
  section.init > div.wrap > div.device > div.screen > div.home {
    top: 0;
    width: 180px;
    height: 360px;
    background-position: 0px 0px;
  }
  section.init > div.wrap > div.device > div.screen > div.timetable {
    top: 0;
    width: 180px;
    height: 360px;
    background-position: -190px 0px;
  }
  section.init > div.wrap > div.device > div.screen > div.board {
    top: 0;
    width: 180px;
    height: 360px;
    background-position: -380px 0px;
  }
  section.footer > ul.links > li > a {
    margin: 0 4px;
    font-size: 11px;
  }
  section h1,
  section h2 {
    line-height: 25px;
    font-size: 18px;
  }
  section h2 {
    padding: 50px 0 20px 0;
  }
  section div.paragraph {
    padding-bottom: 50px;
  }
  section div.paragraph > p {
    line-height: 18px;
    font-size: 12px;
  }
  section div.figures {
    padding-bottom: 50px;
  }
  section div.figures > div {
    margin: 0 10px;
  }
  section div.figures > div > p.number {
    float: right;
    width: 140px;
    text-align: right;
  }
  section div.figures > div > p.number > strong {
    line-height: 36px;
    font-size: 28px;
  }
  section div.figures > div > p.number > span {
    margin-top: 10px;
    line-height: 20px;
    font-size: 11px;
    vertical-align: top;
  }
  section.service div.figures > div > p.description {
    float: left;
    margin-top: 10px;
    width: 80px;
    line-height: 20px;
    font-size: 11px;
    text-align: left;
  }
  section.community div.figures > div > p.description {
    margin-top: 10px;
    font-size: 11px;
  }
  section div.figures > hr {
    display: block;
    margin: 0 auto 10px 0;
  }
  section div.figures > div > p.icon {
    width: 60px;
    height: 60px;
    line-height: 60px;
  }
  section div.figures > div > p.icon > img {
    height: 24px;
  }
}
</style>
