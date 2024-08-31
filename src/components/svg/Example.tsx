"use client";

export const CarSelector = () => {
  const CPath = ({ d, onPress, color }: { d: string; active?: boolean; onPress?: () => void; color?: string }) => (
    <path d={d} onClick={onPress} fill={color ?? `#000000`} fillOpacity={0.2} stroke={"#000000"} strokeWidth={2} />
  );

  return (
    <div
      style={{
        height: 400,
        width: 1000,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg id="svg2" x="0px" y="0px" viewBox="0 0 449.9089 677.59937" width={1000} height={400}>
        <g id="layer2" transform="translate(227.57903,-306.683)">
          <CPath
            onPress={() => {
              alert("Sol Arka Kapı");
            }}
            d="m -79.051462,689.97809 c -0.19435,-6.98988 0.15535,-13.53402 0.0605,-23.56452 -2.8416,-1.27736 -40.638278,-1.17246 -53.023898,-2.3913 -9.22754,-1.81096 -25.26471,-2.45738 -43.07837,-3.03474 -11.10266,0 -39.22287,1.44556 -51.32108,5.0839 l 0.25771,71.8731 15.59676,4.68971 c 16.33229,4.91088 34.95876,20.98346 40.25397,30.145 7.62095,13.18543 15.34333,23.92343 41.7381,5.86309 26.39472,-18.0603 40.219298,-33.6444 46.814438,-43.90925 2.11654,-17.70911 3.00496,-33.85532 2.7019,-44.75499 z"
          />
          <CPath
            onPress={() => {
              alert("Sol Arka Çamurluk");
            }}
            d="m -171.5213,779.67361 c -6.90565,-13.62442 -20.28483,-30.10243 -54.73678,-38.02284 l 0.11301,4.03991 c 0,0 50.37535,12.12249 51.78166,53.02962 1.41126,40.85782 -52.17755,48.60498 -52.17755,48.60498 0,0 0.74017,36.66343 0,48.65433 0.0339,6.30127 18.9643,30.37082 40.19653,23.98175 l 31.71912,-2.81265 c 0,0 9.86902,6.31619 16.21478,-12.6817 6.34577,-19.04721 6.34577,-28.2254 9.86902,-39.47611 l 35.952878,-74.75793 c 4.31829,-8.97914 7.07453,-25.41683 9.35619,-45.05164 -21.709828,18.89134 -68.724788,73.09096 -88.288858,34.49228 z"
          />
          <CPath
            onPress={() => {
              alert("Sol Arka Cam");
            }}
            d="m -85.387812,670.59387 -46.542358,-2.1169 v 102.23827 c 10.23908,-5.57602 36.959528,-22.99485 43.704958,-35.97263 4.93457,-7.05637 2.13665,-40.88741 2.8374,-64.14871 z"
          />
          <CPath
            onPress={() => {
              alert("Sol Arka Köşe Cam");
            }}
            d="m -88.918042,757.3488 c 0,0 -41.587048,34.60379 -43.001678,37.37498 -1.41955,2.77118 0.0411,62.13446 0.0411,62.13446 0,0 22.64711,-43.36805 28.32038,-55.86283 7.082738,-15.51391 14.367158,-26.53084 14.640198,-43.64661 z"
          />
          <CPath
            onPress={() => {
              alert("Sol Ön Kapı");
            }}
            d="m -226.35207,525.72806 c 4.05084,-9.56491 47.18684,-10.58057 48.75238,-10.51909 1.56554,0.0615 34.97259,-0.98998 51.19158,8.89696 14.74885,22.93441 27.853658,47.00965 41.010878,70.91308 v -3e-5 c 5.40312,14.23988 6.01568,42.42341 6.45148,67.54861 -2.455,0.22443 -40.075728,-1.34218 -52.461348,-2.56102 -9.22754,-1.81096 -26.14446,-1.92953 -43.95812,-2.50689 -11.10266,0 -38.69502,2.94113 -51.0964,4.69158 z"
          />
          <CPath
            onPress={() => {
              alert("Sol Ön Çamurluk");
            }}
            d="m -173.96238,511.39385 c -2.91071,-0.0801 -45.42957,1.2026 -52.60929,9.23531 l -0.007,-18.35432 c 0,0 51.47192,-2.82253 52.17755,-47.93882 0.70563,-45.11136 -52.17755,-48.63953 -52.17755,-48.63953 v -32.42471 c 28.38584,-9.76789 44.78619,-12.76263 70.50928,-0.70561 0,0 11.98146,16.92041 16.20984,58.50856 3.70633,36.45347 4.16431,68.57075 11.96928,88.14802 -15.12796,-6.61745 -43.21166,-7.75018 -46.07211,-7.8289 z"
          />
          <CPath
            onPress={() => {
              alert("Sol Ön Cam");
            }}
            d="m 126.52763,526.94469 c -9.17728,7.75702 -40.286891,60.88189 -43.77096,74.72318 -3.662018,14.55679 -3.528577,50.82538 -3.528577,50.82538 l 47.299537,-3.52324 z"
          />
          <CPath
            onPress={() => {
              alert("Sağ Arka Cam");
            }}
            d="m 79.924883,666.66791 46.612597,-2.11689 v 102.23799 c -10.25454,-5.576 -37.015307,-22.99479 -43.770916,-35.97253 -4.942016,-7.05635 -2.139874,-40.8873 -2.841681,-64.14854 z"
          />
          <CPath
            onPress={() => {
              alert("Sağ Arka Köşe Cam");
            }}
            d="m 83.46044,753.42261 c 0,0 41.6498,34.6037 43.06657,37.37488 1.42169,2.77117 -0.0412,62.13429 -0.0412,62.13429 0,0 -22.68129,-43.36793 -28.363118,-55.86268 C 91.029264,781.55523 83.733852,770.53833 83.4604,753.42261 Z"
          />
          <CPath
            onPress={() => {
              alert("Sağ Ön Kapı");
            }}
            d="m 221.10186,521.80249 c -4.05695,-9.56488 -47.25805,-10.58055 -48.82595,-10.51906 -1.5679,0.0615 -35.02536,-0.98998 -51.26883,8.89694 -14.7711,22.93434 -27.895689,47.00952 -41.072763,70.91289 v -3e-5 c -5.411273,14.23984 -6.024758,42.42329 -6.461215,67.54842 2.458704,0.22443 40.136208,-1.34217 52.540518,-2.56101 9.24146,-1.81095 26.18391,-1.92952 44.02445,-2.50688 11.11941,0 38.75341,2.94112 51.1735,4.69156 z"
          />
          <CPath
            onPress={() => {
              alert("Sağ Arka Kapı");
            }}
            d="m 73.578971,686.05208 c 0.194644,-6.98986 -0.155584,-13.53398 -0.06059,-23.56446 2.845888,-1.27735 40.699599,-1.17245 53.103909,-2.39129 9.24147,-1.81096 25.30284,-2.45737 43.14338,-3.03473 11.11941,0 39.28206,1.44555 51.39852,5.08388 l -0.2581,71.87291 -15.62029,4.6897 c -16.35694,4.91087 -35.01152,20.9834 -40.31472,30.14492 C 157.33863,782.0384 149.6046,792.77637 123.17,774.71608 96.735452,756.65583 82.89001,741.07177 76.284918,730.80695 74.165185,713.09789 73.275424,696.95172 73.578941,686.05208 Z"
          />
          <CPath
            onPress={() => {
              alert("Sağ Ön Çamurluk");
            }}
            d="m 168.63311,507.46832 c 2.9151,-0.0801 45.49813,1.2026 52.68868,9.23529 l 0.007,-18.35428 c 0,0 -51.54959,-2.82252 -52.25629,-47.93869 -0.70669,-45.11123 52.25629,-48.6394 52.25629,-48.6394 v -32.42462 c -28.42867,-9.76786 -44.85377,-12.76259 -70.61568,-0.70561 0,0 -11.99954,16.92037 -16.2343,58.50841 -3.71192,36.45337 -4.17059,68.57056 -11.98734,88.14778 15.15079,-6.61743 43.27687,-7.75016 46.14163,-7.82888 z"
          />
          <CPath
            onPress={() => {
              alert("Sağ Arka Çamurluk");
            }}
            d="m 166.18835,775.74736 c 6.91607,-13.62438 20.31544,-30.10235 54.81938,-38.02274 l -0.11318,4.0399 c 0,0 -50.45137,12.12246 -51.8598,53.02948 -1.41339,40.85771 52.25628,48.60485 52.25628,48.60485 0,0 -0.74128,36.66333 0,48.6542 -0.034,6.30125 -18.99291,30.37073 -40.25718,23.98168 l -31.76699,-2.81264 c 0,0 -9.88391,6.31617 -16.23925,-12.68167 -6.35534,-19.04716 -6.35534,-28.22532 -9.88391,-39.476 L 87.136569,786.30669 c -4.324806,-8.97912 -7.085206,-25.41676 -9.370309,-45.05152 21.742591,18.89129 68.8285,73.09076 88.42209,34.49219 z"
          />
          <CPath
            onPress={() => {
              alert("Ön Cam");
            }}
            d="m 88.932048,518.73812 -18.75611,69.45826 c 0,0 -24.28769,-4.16473 -35.50879,-4.16473 h -72.84329 c -15.28222,0 -38.8988,4.16473 -38.8988,4.16473 l -16.66882,-69.45826 c 0,0 30.54467,-8.50709 45.84167,-8.50709 l 91.68332,1.04117 c 15.2822,-0.69575 45.15082,7.46592 45.15082,7.46592 z"
          />
          <CPath
            onPress={() => {
              alert("Çatı");
            }}
            d="m 66.298124,667.16977 c 0,-28.47711 2.690155,-69.42508 3.367846,-74.91326 0,0 -23.873923,-4.15144 -35.095023,-4.15144 h -72.84329 c -15.28222,0 -38.35304,3.58988 -38.35304,3.58988 0,0 3.024321,37.48259 3.024321,71.51593 0,60.45276 -2.646939,91.73513 -2.646939,91.73513 0,0 25.270303,-4.84181 37.774393,-4.84181 h 72.23636 c 12.49912,0 35.953415,5.06283 35.953415,5.06283 0,0 -3.418043,-35.20782 -3.418043,-87.99726 z"
          />
          <CPath
            onPress={() => {
              alert("Sunroof");
            }}
            d="m 42.052288,617.3586 v 22.00793 c 0,8.50009 -7.60779,15.39076 -16.99249,15.39076 h -55.616 c -9.3847,0 -16.99249,-6.89067 -16.99249,-15.39076 V 617.3586 c 0,-8.50008 7.60779,-15.39075 16.99249,-15.39075 h 55.616 c 9.3847,0 16.99249,6.89067 16.99249,15.39075 z"
          />
          <CPath
            onPress={() => {
              alert("Bagaj Kapısı");
            }}
            d="m 70.175938,761.16596 c 0,0 -23.6166,-6.26682 -36.11572,-6.26682 h -72.23636 c -12.50409,0 -38.20306,6.26682 -38.20306,6.26682 l -17.0143,101.65315 -0.24883,60.45742 c 0,0 27.30919,0.0466 39.789901,5.913 21.68742,2.13396 78.168396,2.00927 102.537958,-0.49766 22.130092,-7.2347 39.500001,-6.41066 39.500001,-6.41066 l 0.74649,-59.71093 z"
          />
          <CPath
            onPress={() => {
              alert("Arka Cam");
            }}
            d="m 61.145788,766.69266 c 0,0 -20.1427,-4.14499 -27.78134,-4.14499 h -71.54059 c -9.72595,0 -28.48205,3.45413 -28.48205,3.45413 0,0 -13.19489,46.53253 -13.19489,61.13867 v 20.82364 h 154.1987 v -23.587 c 0,-12.53369 -13.19983,-57.68451 -13.19983,-57.68451 z"
          />
          <CPath
            onPress={() => {
              alert("Cam Tavan");
            }}
            d="m 41.467778,686.97277 v 34.9969 c 0,13.5168 -7.56408,24.47432 -16.89486,24.47432 h -55.29646 c -9.33078,0 -16.89486,-10.95752 -16.89486,-24.47432 v -34.9969 c 0,-13.51679 7.56408,-24.4743 16.89486,-24.4743 h 55.29646 c 9.33078,0 16.89486,10.95751 16.89486,24.4743 z"
          />
          <CPath
            onPress={() => {
              alert("Ön Tampon");
            }}
            d="m 93.142897,371.55702 c 2.730117,-1.01229 5.214831,-3.43566 6.257801,-6.04307 0.52148,-1.22702 0.55216,-2.85282 0.55216,-19.1415 v -17.79178 l -0.79757,-1.68715 c -0.42945,-0.95094 -1.595122,-2.57674 -2.607413,-3.65038 -7.178062,-7.7609 -19.264201,-13.28249 -33.098842,-15.12301 -4.509296,-0.58284 -130.769572,-0.58284 -135.278867,0 -13.957344,1.8712 -26.074158,7.42346 -33.282896,15.30706 -0.88959,0.98162 -1.9939,2.54606 -2.42336,3.46633 l -0.79756,1.68715 v 17.6384 c 0,16.25801 0.0307,17.7611 0.55216,19.23353 0.70553,2.02458 2.73011,4.29456 4.8774,5.46023 1.47242,0.82824 1.90187,0.92027 4.570641,0.92027 2.822144,0 3.036873,-0.0307 5.061454,-1.16567 8.159678,-4.44795 16.895497,-7.61095 22.417084,-8.86864 43.831896,-1.58934 85.918506,-1.00052 129.763973,-0.70211 8.374406,1.19634 16.165977,3.98781 24.325655,8.71184 0.920264,0.55215 2.177959,1.19634 2.760793,1.47242 1.472423,0.67486 5.644288,0.82824 7.147387,0.27608 z"
          />
          <CPath
            onPress={() => {
              alert("Sağ Ön Far");
            }}
            d="m 90.989248,347.37547 c 2.214355,-2.22638 2.854526,-8.36434 1.037169,-11.91134 -2.966025,-5.78889 -10.274397,-9.59381 -16.767325,-9.98168 -3.472844,-0.20746 -8.68116,-0.092 -9.540074,4.23321 -0.368106,1.90188 -3.302893,8.4662 1.216581,13.00587 4.428801,4.44859 18.488713,10.24912 24.053649,4.65394 z"
          />
          <CPath
            onPress={() => {
              alert("Sol Ön Far");
            }}
            d="m -100.32565,345.14881 c -2.27477,-2.39637 -2.93241,-9.00295 -1.06547,-12.82076 3.04695,-6.23087 10.554731,-10.32629 17.224819,-10.74377 3.567602,-0.2233 8.918025,-0.0991 9.800375,4.55642 0.378149,2.04708 3.393011,9.11258 -1.249775,13.99884 -4.549643,4.78824 -18.993177,11.03163 -24.709949,5.00927 z"
          />
          <CPath
            onPress={() => {
              alert("Arka Tampon");
            }}
            d="m -87.486164,927.33813 c -2.396406,0.88856 -4.577404,3.01571 -5.492885,5.30441 -0.457741,1.07703 -0.484667,2.50411 -0.484667,16.80177 v 15.61702 l 0.700074,1.48093 c 0.376963,0.8347 1.400147,2.26178 2.288702,3.20418 6.300663,6.81226 16.909472,11.65892 29.053057,13.27448 3.958108,0.51159 114.785154,0.51159 118.743263,0 12.251289,-1.64248 22.887023,-6.51607 29.214612,-13.43603 0.780852,-0.86163 1.750184,-2.23485 2.127147,-3.04263 l 0.700074,-1.48093 v -15.48239 c 0,-14.27074 -0.02693,-15.59011 -0.484667,-16.88255 -0.619296,-1.77711 -2.396406,-3.76963 -4.281219,-4.79281 -1.292444,-0.727 -1.669407,-0.80778 -4.011961,-0.80778 -2.477184,0 -2.665665,0.0269 -4.442775,1.02319 -7.162292,3.90425 -13.3014,6.46221 -18.148063,7.56618 l -115.431377,0.8347 c -7.350773,-1.05011 -14.189954,-3.50037 -21.352246,-7.64696 -0.807777,-0.48467 -1.911739,-1.05011 -2.423332,-1.29244 -1.292443,-0.59237 -4.954367,-0.727 -6.273737,-0.24234 z"
          />
          <CPath
            onPress={() => {
              alert("Sağ Arka Far");
            }}
            d="m 84.093548,936.09052 c 1.996721,2.10346 2.573972,7.9025 0.935234,11.25365 -2.674513,5.46924 -9.264592,9.06406 -15.119372,9.43052 -3.131521,0.196 -7.827944,0.0869 -8.602441,-3.99947 -0.331926,-1.79687 -2.978272,-7.99873 1.09701,-12.28772 3.993525,-4.20296 16.671576,-9.6832 21.689569,-4.39698 z"
          />
          <CPath
            onPress={() => {
              alert("Sol Arka Far");
            }}
            d="m -88.059054,936.59933 c -1.943687,1.95424 -2.505607,7.34194 -0.910392,10.45538 2.603477,5.08129 9.018521,8.42112 14.717797,8.76158 3.048346,0.1821 7.620033,0.0808 8.373958,-3.71577 0.323111,-1.66941 2.89917,-7.43135 -1.067873,-11.41611 -3.887455,-3.90483 -16.228776,-8.99634 -21.11349,-4.08508 z"
          />
          <CPath
            onPress={() => {
              alert("Kaput");
            }}
            d="m -48.728672,506.6766 91.68332,1.04117 c 15.2822,-0.69575 45.784031,6.40646 45.784031,6.40646 L 87.876322,380.24332 C 70.375822,375.55361 72.034475,366.34104 54.068057,366.30256 L -62.11951,366.05373 c -18.436968,-0.0395 -15.748834,10.64204 -34.187504,13.4586 l 1.768512,134.46532 c 0,0 30.51283,-7.30105 45.80983,-7.30105 z"
          />
          <CPath
            onPress={() => {
              alert("Sol Ön Cam");
            }}
            d="m -131.92034,530.87027 c 9.16345,7.75705 40.226188,60.88206 43.705008,74.72338 3.6565,14.55683 3.52326,50.82552 3.52326,50.82552 l -47.228268,-3.52325 z"
          />
        </g>
      </svg>
    </div>
  );
};