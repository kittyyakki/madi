import React from "react";
import "../site.module.css";

const SitePopup: React.FC = () => { 
  return (
    <div className="site_bg">
    <div className="site_popup">
      <span className="closeButton">X</span>
      <ul className="site_tab">
        <li>
          <h4>개인정보처리방침</h4>
          <div className="site_wrap">
            서울에스마디척의원(이하 ‘본원’이라 한다)은 이용자의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 다음과 같이 개인정보 처리방침을
            수립·공개합니다.
            <br>
            <br>
            <h6>제1조(개인정보의 처리목적)</h6>
            본원는 다음의 목적을 위하여 개인정보를 처리합니다.
            <br>
            처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
            <br>
            1. 온라인문의
            <br>
            온라인문의 시 개인정보 확인목적으로 처리합니다.
            <br>
            <br>
            <h6>제2조(처리하는 개인정보 항목)</h6>
            본원는 다음의 개인정보 항목을 처리하고 있습니다.<br>
            <br>
            1. 온라인문의<br>
            필수항목 : 성명, 연락처, 이메일주소<br>
            <br>
            <h6>제3조(개인정보 수집 방법)</h6>
            1. 온라인문의시 개인정보 수집에 대해 동의를 하고 직접 정보를 입력하는 경우, 해당 개인정보를 수집합니다.
            <br>
            <br>
            <h6>제4조(개인정보의 처리 및 보유기간)</h6>
            - 본원는 법령에 따른 개인정보 보유·이용기간 또는 이용자로부터 개인정보를 수집 시에 동의 받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
            <br>
            
            
            - 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
            <br>
            <br>
            1. 홈페이지 회원 가입 및 관리 : 사업자/단체 홈페이지 탈퇴 시 까지
            <br>
            - 다만, 다음의 사유에 해당하는 경우에는 해당 사유 종료 시 까지
            <br>
            1) 관계 법령 위반에 따른 수사.조사 등이 진행 중인 경우에는 해당 수사.조사 종료 시 까지
            <br>
            2) 홈페이지 이용에 따른 채권.채무관계 잔존 시에는 해당 채권·채무관계 정산 시 까지
            <br>
            <br>
            2. 재화 또는 서비스 제공 : 재화·서비스 공급완료 및 요금결제.정산 완료시까지
            <br>
            다만, 다음의 사유에 해당하는 경우에는 해당 기간 종료 시 까지
            <br>
            1) 「전자상거래 등에서의 소비자 보호에 관한 법률」 제6조에 따른 표시·광고, 계약내용 및 이행 등 거래에 관한 기록
            <br>
            - 표시·광고에 관한 기록 : 6개월
            <br>
            - 계약 또는 청약철회, 대금결제, 재화 등의 공급기록 : 5년
            <br>
            - 소비자 불만 또는 분쟁처리에 관한 기록 : 3년
            <br>
            <br>
            2)「통신비밀보호법」 제15조의2에 따른 통신사실확인자료 보관
            <br>
            - 가입자 전기통신일시, 개시·종료시간, 상대방 가입자번호, 사용도수 : 1년
            <br>
            - 컴퓨터통신, 인터넷 로그기록자료, 접속지 추적자료 : 3개월
            <br>
            <br>
            <h6>제5조(개인정보의 파기)</h6>
            - 본원는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 5일 이내 해당 개인정보를 파기합니다.
            <br>
            <br>
            <h6>제6조(이용자 및 법정대리인의 권리·의무 및 행사방법)</h6>
            - 이용자는 개인정보 보호 관련 권리를 행사할 수 있으며, 이에 대한 자세한 내용은 개인정보 처리방침을 참고하시기 바랍니다
            <br>
            <br>
            <h6>제7조(개인정보 자동 수집 장치의 설치·운영 및 거부)</h6>
            - 본원은 쿠키를 사용하여 이용자의 정보를 저장하고 수시로 불러오며, 이에 대한 자세한 내용은 개인정보 처리방침을 참고하시기 바랍니다.
            <br>
            <br>
            <h6>제8조(개인정보의 안전성 확보조치)</h6>
            - 본원은 개인정보의 안전성 확보를 위해 관리적, 기술적, 물리적 조치를 취하고 있으며, 이에 대한 자세한 내용은 개인정보 처리방침을 참고하시기 바랍니다.
            <br>
            <br>
            <h6>제9조(개인정보 보호책임자)</h6>
            - 본원의 개인정보 보호책임자 및 담당부서에 대한 연락처는 개인정보 처리방침을 참고하시기 바랍니다.
            <br>
            <br>
            <h6>제10조(개인정보 열람청구)</h6>
            - 이용자는 개인정보의 열람 청구를 본원의 개인정보 보호책임자에게 할 수 있습니다.
            <br>
            <br>
            <h6>제11조(권익침해 구제방법)</h6>
            - 이용자는 개인정보 침해에 대한 피해구제를 위해 아래의 기관에 문의할 수 있습니다.
            <br>
            <br>
            <h6>제12조(개인정보 처리방침 변경)</h6>
            - 본 개인정보 처리방침은 2025년 09월 29일부터 적용됩니다.
            <br>
            <br>
          </div>
        </li>
        <li>
          <h4>이용약관</h4>
          <div className="site_wrap">
            서울에스마디척의원(이하 ‘본원’이라 한다)의 홈페이지를 이용해 주셔서 감사합니다.
            아래의 이용약관은 본원 홈페이지의 이용에 관한 규정을 설명하고 있습니다.
            홈페이지를 이용함으로써 아래의 약관에 동의한 것으로 간주됩니다.
            <br>
            <br>
            <h6>제1조(목적)</h6>
            본 약관은 본원의 홈페이지를 통해 제공되는 서비스의 이용과 관련하여 발생하는 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
            <br>
            <br>
            <h6>제2조(정의)</h6>
            1. "홈페이지"란 본원이 운영하는 웹 사이트를 의미합니다.<br>
            2. "이용자"란 본 홈페이지에 접속하여 이 약관에 따라 본원이 제공하는 서비스를 이용하는 개인을 말합니다.<br>
            <br>
            <h6>제3조(서비스의 제공 및 변경)</h6>
            1. 본원은 이용자에게 아래의 서비스를 제공합니다.
            <br>
            1)온라인 문의 서비스
            <br>
            2)기타 본원이 정하는 서비스
            <br>
            <br>
            <h6>제4조(이용자의 의무)</h6>
            1. 이용자는 본원의 서비스를 이용함에 있어 다음의 사항을 준수해야 합니다.
            <br>
            1) 본인의 개인정보를 정확하게 제공하여야 합니다.
            <br>
            2) 본원의 서비스를 이용하여 얻은 정보를 무단으로 복제, 변경, 유포하지 않아야 합니다.
            <br>
            <br>
            2. 이용자는 본원의 서비스를 이용하는 과정에서 다른 이용자 또는 제3자의 권리나 명예를 침해해서는 안 됩니다.
            <br>
            <br>
            <h6>제5조(저작권의 귀속 및 이용 제한)</h6>
            1. 본원이 홈페이지를 통해 제공하는 모든 콘텐츠(문서, 그래픽, 로고, 아이콘 등)의 저작권은 본원에게 속합니다.
            <br>
            2. 이용자는 본원의 사전 동의 없이 홈페이지에서 제공되는 콘텐츠를 복제, 수정, 배포할 수 없습니다.
            <br>
            <br>
            <h6>제6조(면책)</h6>
            1. 본원은 천재지변, 전쟁, 기간통신사업자의 서비스 중단 등 불가항력적인 사유로 인해 서비스 제공에 장애가 생길 경우 이에 대한 책임을 지지 않습니다.
            <br>
            2. 본원은 이용자가 본 홈페이지에 게시한 정보의 정확성, 신뢰성 등에 대해 일체의 책임을 지지 않습니다.
            <br>
            <br>
            <h6>제7조(분쟁의 해결)</h6>
            - 본 약관에 관하여 분쟁이 발생할 경우, 양 당사자 간의 협의를 통해 원만하게 해결하며, 이에 불가피한 경우 관할 법원에 소를 제기할 수 있습니다.
            <br>
            <br>
            <h6>제8조(약관의 변경)</h6>
            - 본원은 필요한 경우 이용약관을 변경할 수 있으며, 변경된 약관은 홈페이지에 공지함으로써 효력을 발생합니다.
            <br>
            <br>
            <h6>제9조(개인정보 보호정책)</h6>
            - 본원은 이용자의 개인정보를 보호하기 위해 노력하며, 관련 법령에 따라 적절한 조치를 취합니다. 개인정보 보호정책은 별도로 공지됩니다.
            <br>
            <br>
            <h6>제10조(유효기간)</h6>
            - 본 약관은 2025년 09월 29일부터 시행됩니다.
            <br>
            <br>
          </div>
        </li>
        <li>
          <h4>비급여 진료비</h4>
          <div className="time_wrap">
            <ul className="noti_txt">
              <li>&middot; 의료법 제 45조 및 동법 시행규칙 제 42조의 2 에 의하여 비급여 진료비용을 고지합니다.</li>
              <li>&middot; 기준일 : 2025-09-29</li>
            </ul>
            <div className="table_tit">행위료</div>
            <div className="table_sty03 m_scroll w950">
              <table>
                <caption>비급여 항목별 진료비용 - 행위료에 관한 표이며 중분류, 소분류, 항목, 진료비용 등(단위:원), 특이사항, 최종변경일 로 구성되어 있습니다.
                </caption>
                <colgroup>
                  <col style={{ width: "8%" }} />
                  <col style={{ width: "8%" }} />
                  <col style={{ width: "8%" }} />
                  <col style={{ width: "10%" }} />
                  <col style={{ width: "9%" }} />
                  <col style={{ width: "7%" }} />
                  <col style={{ width: "6%" }} />
                  <col style={{ width: "6%" }} />
                  <col style={{ width: "7%" }} />
                  <col style={{ width: "7%" }} />
                  <col style={{ width: "13%" }} />
                  <col style={{ width: "6%" }} />
                </colgroup>
                <thead>
                  <tr>
                    <th rowSpan={2}>중분류</th>
                    <th rowSpan={2}>소분류</th>
                    <th colSpan={2}>항목</th>
                    <th colSpan={6}>진료비용 등(단위:원)</th>
                    <th rowSpan={2}>특이<br />사항</th>
                    <th rowSpan={2}>최종<br />변경일</th>
                  </tr>
                  <tr>
                    <th scope="col">코드</th>
                    <th scope="col">명칭</th>
                    <th scope="col">구분</th>
                    <th scope="col">비용</th>
                    <th scope="col">최저<br />비용</th>
                    <th scope="col">최고<br />비용</th>
                    <th scope="col">치료재료대 포함여부</th>
                    <th scope="col">약제비 포함여부</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowSpan={4}>초음파검사료
                      (기본초음파)</td>
                      <td>단순초음파</td>
                      <td>EB401000</td>
                      <td>SONO(초음파)</td>
                      <td>SONO1</td>
                      <td>10,000</td>
                      <td>10,000</td>
                      <td>100,000</td>
                      <td>X</td>
                      <td>X</td>
                      <td>인정기준 외 실시한 경우 비급여
                        부위 및 난이도에 따라 다름
                      </td>
                      <td>25.09.29</td>
                    </tr>
                    <tr>
                      <td rowspan="3">근골</td>
                      <td rowspan="3">SZ0840000</td>
                      <td rowspan="3">체외충격파치료[근골격계질환]</td>
                      <td>체외충격파6</td>
                      <td>60,000</td>
                      <td></td>
                      <td></td>
                      <td>X</td>
                      <td>X</td>
                      <td>F:1000 / R:1500
                      </td>
                      <td>25.09.29</td>
                    </tr>
                    <tr>
                      <td>체외충격파9</td>
                      <td>90,000</td>
                      <td></td>
                      <td></td>
                      <td>X</td>
                      <td>X</td>
                      <td>F:1500 / R:1500</td>
                      <td>25.09.29</td>
                    </tr>
                    <tr>
                      <td>체외충격파12</td>
                      <td>120,000</td>
                      <td></td>
                      <td></td>
                      <td>X</td>
                      <td>X</td>
                      <td>F:2000 / R:1500</td>
                      <td>25.09.29</td>
                    </tr>
                    <tr>
                      <td rowspan="5">이학요법료
                        (물리치료료)</td>
                        <td rowspan="2">도수치료</td>
                        <td rowspan="2">MX1220000</td>
                        <td rowspan="2">도수치료[1일당]</td>
                        <td>도수치료10</td>
                        <td>100,000</td>
                        <td></td>
                        <td></td>
                        <td>X</td>
                        <td>X</td>
                        <td>30분
                        </td>
                        <td>25.09.29</td>
                      </tr>
                      <tr>
                        <td>도수치료15</td>
                        <td>150,000</td>
                        <td></td>
                        <td></td>
                        <td>X</td>
                        <td>X</td>
                        <td>50분</td>
                        <td>25.09.29</td>
                      </tr>
                      <tr>
                        <td rowspan="2">증식치료</td>
                        <td>MY1420000</td>
                        <td>사지관절부위</td>
                        <td>프롤로1</td>
                        <td>10,000</td>
                        <td>10,000</td>
                        <td>100,000</td>
                        <td>X</td>
                        <td>X</td>
                        <td>1부위</td>
                        <td>25.09.29</td>
                      </tr>
                      <tr>
                        <td>MY1430000</td>
                        <td>척추부위</td>
                        <td>프롤로2</td>
                        <td>20,000</td>
                        <td>20,000</td>
                        <td>100,000</td>
                        <td>X</td>
                        <td>X</td>
                        <td>1부위</td>
                        <td>25.09.29</td>
                      </tr>
                      <tr>
                        <td>신장분사치료</td>
                        <td>MZ0070000</td>
                        <td>신장분사치료</td>
                        <td>신장분사
                          크라이오(cryo)</td>
                          <td>20,000</td>
                          <td></td>
                          <td></td>
                          <td>O</td>
                          <td>X</td>
                          <td>1부위</td>
                          <td>25.09.29</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="table_tit">치료재료대</div>
                  <div class="table_sty03 m_scroll ">
                    <table>
                      <caption>비급여 항목별 진료비용 - 행위료에 관한 표이며 중분류, 소분류, 항목, 진료비용 등(단위:원), 특이사항, 최종변경일 로 구성되어 있습니다.
                      </caption>
                      <colgroup>
                        <col width="20%">
                        <col width="20%">
                        <col width="40%">
                        <col width="10%">
                        <col width="20%">
                        <col width="20%">
                      </colgroup>
                      <thead>
                        <tr>
                          <th rowSpan={2}>중분류</th>
                          <th scope="colgroup" colspan="2">항목</th>
                          <th scope="colgroup" colspan="1">진료비용 등(단위:원)</th>
                          <th rowSpan={2}>특이사항</th>
                          <th rowSpan={2}>최종변경일</th>
                        </tr>
                        <tr>
                          <th scope="col">코드</th>
                          <th scope="col">명칭</th>
                          <th scope="col">비용</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td rowspan="7">드레싱</td>
                          <td>M3102108</td>
                          <td>SUPPERPORE 수퍼포아 밴드</td>
                          <td>1,000</td>
                          <td>1EA</td>
                          <td>25.09.29</td>
                        </tr>
                        <tr>
                          <td>M3202017</td>
                          <td>방수밴드 에이덤 드레싱</td>
                          <td>3,000</td>
                          <td>1EA</td>
                          <td>25.09.29</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>스킨테이프</td>
                          <td>5,000</td>
                          <td>1EA</td>
                          <td>25.09.29</td>
                        </tr>
                        <tr>
                          <td>M3030701</td>
                          <td>MEDIFOAM 메디폼 드레싱(10CMX10CM)</td>
                          <td>8,000</td>
                          <td>사용량에 따라 가격 차이가 있음</td>
                          <td>25.09.29</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>듀오덤</td>
                          <td>5,000</td>
                          <td>사용량에 따라 가격 차이가 있음</td>
                          <td>25.09.29</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>스킨스템플러</td>
                          <td>28,000</td>
                          <td>1EA</td>
                          <td>25.09.29</td>
                        </tr>
                        <tr>
                          <td>BK7101EA</td>
                          <td>코반</td>
                          <td>10,000</td>
                          <td>사용량에 따라 가격 차이가 있음</td>
                          <td>25.09.29</td>
                        </tr>
                        <tr>
                          <td rowspan="12">기타</td>
                          <td>ARMSLING</td>
                          <td>팔걸이</td>
                          <td>5,000</td>
                          <td>1EA</td>
                          <td>25.09.29</td>
                        </tr>
                        <tr>
                          <td>BC1203YF</td>
                          <td>소프트칼라 목보호대, 보조기</td>
                          <td>10,000</td>
                          <td>1EA</td>
                          <td>25.09.29</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>팔자붕대</td>
                          <td>15,000</td>
                          <td></td>
                          <td>25.09.29</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>캐스트(깁스)슈즈</td>
                          <td>10,000</td>
                          <td>1EA</td>
                          <td>25.09.29</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>멀티핑거</td>
                          <td>10,000</td>
                          <td>1EA</td>
                          <td>25.09.29</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>알루미륨 스플린트</td>
                          <td>5,000</td>
                          <td>1EA</td>
                          <td>25.09.29</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>목발</td>
                          <td>15,000</td>
                          <td>1EA</td>
                          <td>25.09.29</td>
                        </tr>
                        <tr>
                          <td>BC1015RE</td>
                          <td>엘보보호대 med 보조기</td>
                          <td>30,000</td>
                          <td>1EA</td>
                          <td>25.09.29</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>벨포</td>
                          <td>30,000</td>
                          <td>1EA</td>
                          <td>25.09.29</td>
                        </tr>
                        <tr>
                          <td>BC1015RE</td>
                          <td>무릎보호대 med 보조기</td>
                          <td>30,000</td>
                          <td>1EA</td>
                          <td>25.09.29</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>허리보호대 med 보조기</td>
                          <td>50,000</td>
                          <td>1EA</td>
                          <td>25.09.29</td>
                        </tr>
                        <tr>
                          <td>K7901171</td>
                          <td>복대</td>
                          <td>10,000</td>
                          <td>1EA</td>
                          <td>25.09.29</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="table_tit">약제비</div>
                  <div class="table_sty03 m_scroll ">
                    <table>
                      <caption>비급여 항목별 진료비용 - 행위료에 관한 표이며 중분류, 소분류, 항목, 진료비용 등(단위:원), 특이사항, 최종변경일 로 구성되어 있습니다.
                      </caption>
                      <colgroup>
                        <col width="20%">
                        <col width="30%">
                        <col width="20%">
                        <col width="20%">
                        <col width="20%">
                        <col width="20%">
                      </colgroup>
                      <thead>
                        <tr>
                          <th scope="colgroup" colspan="2">항목</th>
                          <th scope="colgroup" colspan="2">진료비용 등(단위:원)</th>
                          <th rowSpan={2}>특이사항</th>
                          <th rowSpan={2}>최종변경일</th>
                        </tr>
                        <tr>
                          <th scope="col">코드</th>
                          <th scope="col">명칭</th>
                          <th scope="col">최저비용</th>
                          <th scope="col">최고비용</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td></td>
                          <td>통증수액</td>
                          <td>100,000</td>
                          <td></td>
                          <td></td>
                          <td>25.09.29</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>통증수액(부스터)</td>
                          <td>150,000</td>
                          <td></td>
                          <td></td>
                          <td>25.09.29</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>마이어스칵테일</td>
                          <td>100,000</td>
                          <td></td>
                          <td></td>
                          <td>25.09.29</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>마늘주사</td>
                          <td>50,000</td>
                          <td></td>
                          <td></td>
                          <td>25.09.29</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>미네랄주사</td>
                          <td>50,000</td>
                          <td></td>
                          <td></td>
                          <td>25.09.29</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>비타민D주사</td>
                          <td>20,000</td>
                          <td></td>
                          <td></td>
                          <td>25.09.29</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>태반주사</td>
                          <td>20,000</td>
                          <td></td>
                          <td></td>
                          <td>25.09.29</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>백옥주사</td>
                          <td>20,000</td>
                          <td></td>
                          <td></td>
                          <td>25.09.29</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>리포라제주</td>
                          <td>100,000</td>
                          <td></td>
                          <td>부위 및 용량에 따라 다름</td>
                          <td>25.09.29</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>에이치피셀 비타란주</td>
                          <td>100,000</td>
                          <td></td>
                          <td>부위 및 용량에 따라 다름</td>
                          <td>25.09.29</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div class="table_tit">제증명</div>
                  <div class="table_sty03 m_scroll ">
                    <table>
                      <caption>비급여 항목별 진료비용 - 행위료에 관한 표이며 중분류, 소분류, 항목, 진료비용 등(단위:원), 특이사항, 최종변경일 로 구성되어 있습니다.
                      </caption>
                      <colgroup>
                        <col width="20%">
                        <col width="40%">
                        <col width="20%">
                        <col width="20%">
                        <col width="20%">
                      </colgroup>
                      <thead>
                        <tr>
                          <th scope="colgroup" colspan="2">항목</th>
                          <th scope="colgroup" colspan="1">진료비용 등(단위:원)</th>
                          <th rowSpan={2}>특이사항</th>
                          <th rowSpan={2}>최종변경일</th>
                        </tr>
                        <tr>
                          <th scope="col">코드</th>
                          <th scope="col">명칭</th>
                          <th scope="col">비용</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>PDZ010001</td>
                          <td>진단서(일반진단서)</td>
                          <td>10,000</td>
                          <td></td>
                          <td>25.09.29</td>
                        </tr>
                        <tr>
                          <td>PDE010001</td>
                          <td>진단서(영문일반진단서)</td>
                          <td>10,000</td>
                          <td></td>
                          <td>25.09.29</td>
                        </tr>
                        <tr>
                          <td>PDZ020001</td>
                          <td>상해진단서(3주미만)</td>
                          <td>100,000</td>
                          <td></td>
                          <td>25.09.29</td>
                        </tr>
                        <tr>
                          <td>PDZ020002</td>
                          <td>상해진단서(3주이상)</td>
                          <td>150,000</td>
                          <td></td>
                          <td>25.09.29</td>
                        </tr>
                        <tr>
                          <td>PDZ090007</td>
                          <td>진료확인서,통원확인서</td>
                          <td>0원</td>
                          <td></td>
                          <td>25.09.29</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>소견서</td>
                          <td>10,000</td>
                          <td></td>
                          <td>25.09.29</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>진단서, 소견서 재발급</td>
                          <td>1,000</td>
                          <td></td>
                          <td>25.09.29</td>
                        </tr>
                        <tr>
                          <td>PDZ110101</td>
                          <td>진료기록부</td>
                          <td>장당 1,000</td>
                          <td></td>
                          <td>25.09.29</td>
                        </tr>
                        <tr>
                          <td>PDZ110102</td>
                          <td></td>
                          <td>장당 100</td>
                          <td>1 ~ 5매</td>
                          <td>25.09.29</td>
                        </tr>
                        <tr>
                          <td>PDZ110104</td>
                          <td>CD복사</td>
                          <td>장당 5,000</td>
                          <td>6매 이상</td>
                          <td>25.09.29</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
  );
};

export default SitePopup;