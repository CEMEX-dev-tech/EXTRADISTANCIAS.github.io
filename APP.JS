// Base de datos de plantas

const plantas = [
    {"nombre": "CO-240", "pais": "Colombia", "latitud": 4.816855059, "longitud": -74.03627429},
    {"nombre": "CO-TOCANCIPA", "pais": "Colombia", "latitud": 4.952157274, "longitud": -73.94257531},
    {"nombre": "CO-SIBERIA", "pais": "Colombia", "latitud": 4.734034991, "longitud": -74.12918583},
    {"nombre": "CO-PUENTE ARANDA L2", "pais": "Colombia", "latitud": 4.64057874, "longitud": -74.11171748},
    {"nombre": "CO-CALLE 170", "pais": "Colombia", "latitud": 4.750685495, "longitud": -74.02373337},
    {"nombre": "CO-FUSAGASUGÁ", "pais": "Colombia", "latitud": 4.463480801, "longitud": -74.36742091},
    {"nombre": "CO-BOSA", "pais": "Colombia", "latitud": 4.594625225, "longitud": -74.18055917},
    {"nombre": "CO-FONTIBÒN", "pais": "Colombia", "latitud": 4.683404534, "longitud": -74.15866148},
    {"nombre": "CO-SUR (DTE)", "pais": "Colombia", "latitud": 4.533659801, "longitud": -74.12709063},
    {"nombre": "CO-SOACHA", "pais": "Colombia", "latitud": 4.578649103, "longitud": -74.2506019},
    {"nombre": "CO-SUMAPAZ", "pais": "Colombia", "latitud": 4.226353796, "longitud": -74.70452289},
    {"nombre": "CO-CON. IBAGUE", "pais": "Colombia", "latitud": 4.428862691, "longitud": -75.19944487},
    {"nombre": "CO-NEIVA", "pais": "Colombia", "latitud": 2.861146693, "longitud": -75.27383338},
    {"nombre": "CO-CALI", "pais": "Colombia", "latitud": 3.494415834, "longitud": -76.48177838},
    {"nombre": "CO-CALI SUR", "pais": "Colombia", "latitud": 3.303607543, "longitud": -76.47872531},
    {"nombre": "CO-PEREIRA", "pais": "Colombia", "latitud": 4.82182606, "longitud": -75.68936025},
    {"nombre": "CO-TULUA PARAJE LA RIVERA", "pais": "Colombia", "latitud": 4.08890614, "longitud": -76.16219128},
    {"nombre": "CO-LA ESTRELLA", "pais": "Colombia", "latitud": 6.158077603, "longitud": -75.63560033},
    {"nombre": "CO-BELLO LINEA 2", "pais": "Colombia", "latitud": 6.321229615, "longitud": -75.55171148},
    {"nombre": "CO-RIONEGRO", "pais": "Colombia", "latitud": 6.139585417, "longitud": -75.39216323},
    {"nombre": "CO-BARRANQUILLA", "pais": "Colombia", "latitud": 11.00055161, "longitud": -74.78025308},
    {"nombre": "CO-SANTA MARTA", "pais": "Colombia", "latitud": 11.01904818, "longitud": -74.21134127},
    {"nombre": "CO-CARTAGENA", "pais": "Colombia", "latitud": 10.35597129, "longitud": -75.49647874},
    {"nombre": "CO-CUCUTA", "pais": "Colombia", "latitud": 7.827223987, "longitud": -72.50361193},
    {"nombre": "CO-FLORIDA", "pais": "Colombia", "latitud": 7.060918429, "longitud": -73.09268363},
    {"nombre": "CO-PUENTE ARANDA", "pais": "Colombia", "latitud": 4.640631197, "longitud": -74.11169344},
    {"nombre": "CO-PUERTO BERRIO", "pais": "Colombia", "latitud": 6.522467702, "longitud": -74.415974},
    {"nombre": "CO-Vista Hermosa", "pais": "Colombia", "latitud": 4.686541486, "longitud": -74.28294486},
    {"nombre": "CXO Pamplona", "pais": "Colombia", "latitud": 7.387398139, "longitud": -72.65217544},
    {"nombre": "FB80 - TRADING- MASSEQ - TESALIA (HUL)", "pais": "Colombia", "latitud": 2.460632, "longitud": -75.688416},
    {"nombre": "ALION - RIONEGRO", "pais": "Colombia", "latitud": 6.179777695, "longitud": -75.37080136},
    {"nombre": "ACROSS INGENIERIA SAS", "pais": "Colombia", "latitud": 2.93209, "longitud": -75.2555},
    {"nombre": "ADECUACIONES Y AGREGADOS SA - CALI", "pais": "Colombia", "latitud": 3.476681269, "longitud": -76.53483482},
    {"nombre": "AGREGADOS DEL OCCIDENTE DE RISARALDA", "pais": "Colombia", "latitud": 4.903473547, "longitud": -75.88783308},
    {"nombre": "AGREGADOS LA FLORESTA SAS - GIRARDOT", "pais": "Colombia", "latitud": 4.298289298, "longitud": -74.8212813},
    {"nombre": "AGREGADOS NACIONALES S A S -EL GUAMO", "pais": "Colombia", "latitud": 3.985485399, "longitud": -74.98863783},
    {"nombre": "ASFALTART S A S - FLORIDABLANCA", "pais": "Colombia", "latitud": 7.063938619, "longitud": -73.13303056},
    {"nombre": "ASOCIACION DE MUNICIPIOS DEL ALTO - AYAPEL", "pais": "Colombia", "latitud": 8.29687, "longitud": -75.1583},
    {"nombre": "BETAS ING S.A.S - VILLAVICENCIO", "pais": "Colombia", "latitud": 4.10794, "longitud": -73.613},
    {"nombre": "BSV BETON S.A.S - TRONCAL DEL CARIBE", "pais": "Colombia", "latitud": 10.4216, "longitud": -75.4304},
    {"nombre": "CONCREHUILA LTDA - NEIVA", "pais": "Colombia", "latitud": 2.85317, "longitud": -75.287},
    {"nombre": "CONCREMACK SAS - GUAMAL", "pais": "Colombia", "latitud": 3.88841, "longitud": -73.7717},
    {"nombre": "CONCREMACK SAS - SAN JUAN DE ARAMA", "pais": "Colombia", "latitud": 3.57114, "longitud": -73.7171},
    {"nombre": "CONCREMEX S.A.S - BARBOSA", "pais": "Colombia", "latitud": 5.94075, "longitud": -73.6134},
    {"nombre": "CONCREMOVIL S.A.S - VILLAVICENCIO", "pais": "Colombia", "latitud": 4.152591876, "longitud": -73.63808124},
    {"nombre": "CONCREMOVIL S.A.S - FLORIDABLANCA", "pais": "Colombia", "latitud": 7.06081, "longitud": -73.1134},
    {"nombre": "CONCREQUIP SAS - NEIVA", "pais": "Colombia", "latitud": 2.93209, "longitud": -75.2555},
    {"nombre": "CONCRESCOR SAS - SANTA ROSA DE CABAL", "pais": "Colombia", "latitud": 4.93799, "longitud": -75.6171},
    {"nombre": "CONCRETERA TREMIX S A S - BTA USAQUEN", "pais": "Colombia", "latitud": 4.77479, "longitud": -74.0292},
    {"nombre": "CONCRETERA TREMIX S A S - COTA", "pais": "Colombia", "latitud": 4.74526, "longitud": -74.1364},
    {"nombre": "CONCRETERA TREMIX S A S - USME", "pais": "Colombia", "latitud": 4.51152, "longitud": -74.1234},
    {"nombre": "CONCRETERA TREMIX S A S - MOSQUERA", "pais": "Colombia", "latitud": 4.71035, "longitud": -74.2453},
    {"nombre": "CONCRETERA TREMIX S A S - TOCANCIPA", "pais": "Colombia", "latitud": 4.963722732, "longitud": -73.96426397},
    {"nombre": "CONCRETERA TREMIX S A S - SIBATÉ", "pais": "Colombia", "latitud": 4.52783, "longitud": -74.2639},
    {"nombre": "CONCRETERA TREMIX S A S - SABANETA", "pais": "Colombia", "latitud": 6.15008, "longitud": -75.6309},
    {"nombre": "CONCRETOS AGREGADOS Y TRANSPORTES - YOPAL", "pais": "Colombia", "latitud": 5.31999, "longitud": -72.3763},
    {"nombre": "CONCRETOS ALPHA SAS - ACASÍAS", "pais": "Colombia", "latitud": 3.96014, "longitud": -73.7671},
    {"nombre": "CONCRETOS E INGENIERIA DE LA SABANA - POPAYAN", "pais": "Colombia", "latitud": 2.458143872, "longitud": -76.64112796},
    {"nombre": "CONCRETOS GLORIA LTDA - TENJO", "pais": "Colombia", "latitud": 4.77075, "longitud": -74.163},
    {"nombre": "CONCRETOS PREMEZCLADOS DE OCCIDENTE - ARMENIA", "pais": "Colombia", "latitud": 4.50504, "longitud": -75.6909},
    {"nombre": "CONCRETOS PREMEZCLADOS DEL CAUCA - POPAYÁN", "pais": "Colombia", "latitud": 2.50443, "longitud": -76.5608},
    {"nombre": "CONCRETOS SAN PIO SAS - ITAGUÍ", "pais": "Colombia", "latitud": 6.15773, "longitud": -75.617},
    {"nombre": "CONCRETOS Y MORTEROS S.A - CÚCUTA", "pais": "Colombia", "latitud": 7.96779, "longitud": -72.502},
    {"nombre": "CONCRETOS Y MORTEROS S.A - LOS PATIOS (NTE SANT)", "pais": "Colombia", "latitud": 7.75635, "longitud": -72.5318},
    {"nombre": "CONCRETOS Y MORTEROS S.A - CÚCUTA", "pais": "Colombia", "latitud": 7.889115701, "longitud": -72.49669208},
    {"nombre": "CONSORCIO CONSTRUCTORES ASOCIADOS - FLORIDABLANCA", "pais": "Colombia", "latitud": 7.06084, "longitud": -73.1136},
    {"nombre": "CONSORCIO ININGENIERIA YAPE - AYAPEL", "pais": "Colombia", "latitud": 8.29513, "longitud": -75.1631},
    {"nombre": "Holcim - CARTAGENA", "pais": "Colombia", "latitud": 10.35939167, "longitud": -75.50557222},
    {"nombre": "DSP CONCRETOS SAS - FLORIDABLANCA", "pais": "Colombia", "latitud": 7.05667, "longitud": -73.1129},
    {"nombre": "GRUPO CONCRESA S A - YONDÓ", "pais": "Colombia", "latitud": 7.0825, "longitud": -73.8931},
    {"nombre": "HORMIGON ANDINO S A - BOGOTÁ", "pais": "Colombia", "latitud": 4.59321, "longitud": -74.1798},
    {"nombre": "HORMIGON ANDINO S A - GUASCA", "pais": "Colombia", "latitud": 4.88941, "longitud": -73.8869},
    {"nombre": "HORMIGON ANDINO S A - MOSQUERA", "pais": "Colombia", "latitud": 4.71035, "longitud": -74.2453},
    {"nombre": "HORMIGON COLOMBIA S A S - BARRANCABERMEJA", "pais": "Colombia", "latitud": 7.07009, "longitud": -73.8189},
    {"nombre": "HORMIGON SANTANDER S.A.S - SAN GIL", "pais": "Colombia", "latitud": 6.56037, "longitud": -73.1434},
    {"nombre": "HORMIGON URBANO SAS - BOGOTÁ 170", "pais": "Colombia", "latitud": 4.7501, "longitud": -74.0232},
    {"nombre": "INGETIERRAS DE COLOMBIA SA - RIONEGRO", "pais": "Colombia", "latitud": 6.17143, "longitud": -75.3643},
    {"nombre": "INVERSORA FURATENA S.A.S. - YOPAL", "pais": "Colombia", "latitud": 5.27725, "longitud": -72.4015},
    {"nombre": "M C H CONSTRUCCIONES INGENIERIAS - GAMARRA", "pais": "Colombia", "latitud": 8.48497, "longitud": -73.6384},
    {"nombre": "MAXICONCRETOS MH SAS - MOSQUERA", "pais": "Colombia", "latitud": 4.68647, "longitud": -74.2771},
    {"nombre": "MEGACONCRETOS SAS - FONTIBÓN", "pais": "Colombia", "latitud": 4.67807, "longitud": -74.171},
    {"nombre": "METALICAS E INGENIERIA - POPAYÁN", "pais": "Colombia", "latitud": 2.45407, "longitud": -76.6433},
    {"nombre": "MIX CONCRETOS DE COLOMBIA - DOSQUEBRADAS", "pais": "Colombia", "latitud": 4.85872, "longitud": -75.6566},
    {"nombre": "MYA GROUP CONCRETOS SAS - LA CONEJERA", "pais": "Colombia", "latitud": 4.789034648, "longitud": -74.09522062},
    {"nombre": "POLIMIX - FONTIBÓN", "pais": "Colombia", "latitud": 4.679525847, "longitud": -74.17084852},
    {"nombre": "POLIMIX - SIBATÉ", "pais": "Colombia", "latitud": 4.528409096, "longitud": -74.26389039},
    {"nombre": "TC TECNICONCRETOS DE COLOMBIA - ARMENIA", "pais": "Colombia", "latitud": 4.49192, "longitud": -75.7018},
    {"nombre": "TORRES SEPULVEDA INGENIERIA - NILO (CUN)", "pais": "Colombia", "latitud": 4.24304, "longitud": -74.7105},
    {"nombre": "TRANSCONCRETO LIMITADA - SUBA", "pais": "Colombia", "latitud": 4.81537, "longitud": -74.0624},
    {"nombre": "TRITURADORA LA PIEDRA - CÚCUTA", "pais": "Colombia", "latitud": 7.93113, "longitud": -72.5833},
    {"nombre": "TRITURADOS EL ZULIA - NTE SANT", "pais": "Colombia", "latitud": 7.93242, "longitud": -72.5887},
    {"nombre": "ARGOS - CARTAGENA", "pais": "Colombia", "latitud": 10.35670222, "longitud": -75.49557092},
    {"nombre": "ARGOS -LA SIRIACA", "pais": "Colombia", "latitud": 10.51559487, "longitud": -75.46271371},
    {"nombre": "ULTRACEM -TURBACO", "pais": "Colombia", "latitud": 10.39275607, "longitud": -75.44326241},
    {"nombre": "MIX CONCRETE - VTE MAMONAL", "pais": "Colombia", "latitud": 10.285324, "longitud": -75.478167},
    {"nombre": "ARGOS - FUSAGASUGA", "pais": "Colombia", "latitud": 4.344151, "longitud": -74.37449},
    {"nombre": "HORMIGON URBANO SAS - FUSAGASUGÁ", "pais": "Colombia", "latitud": 4.345373, "longitud": -74.381248},
    {"nombre": "HOLCIM - PUENTE ARANDA", "pais": "Colombia", "latitud": 4.640638889, "longitud": -74.10791667},
    {"nombre": "HOLCIM - TUNJA", "pais": "Colombia", "latitud": 5.578988, "longitud": -73.33728},
    {"nombre": "HOLCIM - NOBSA", "pais": "Colombia", "latitud": 5.766511111, "longitud": -72.93591111},
    {"nombre": "HOLCIM - FLORIDABLANCA", "pais": "Colombia", "latitud": 7.05775, "longitud": -73.084575},
    {"nombre": "HOLCIM - BELLO", "pais": "Colombia", "latitud": 6.311330556, "longitud": -75.55149444},
    {"nombre": "CONCRETOS LA FLORESTA - NILO (CUN)", "pais": "Colombia", "latitud": 4.216394, "longitud": -74.663713},
    {"nombre": "ARGOS - BTA CLL 80", "pais": "Colombia", "latitud": 4.730501818, "longitud": -74.13496444},
    {"nombre": "ARGOS - BTA FONTIBÓN", "pais": "Colombia", "latitud": 4.678397659, "longitud": -74.16961908},
    {"nombre": "ARGOS - BTA PTE ARANDA", "pais": "Colombia", "latitud": 4.63927103, "longitud": -74.1088555},
    {"nombre": "ARGOS - ARMENIA", "pais": "Colombia", "latitud": 4.504867602, "longitud": -75.69056398},
    {"nombre": "ARGOS - POPAYAN", "pais": "Colombia", "latitud": 2.501841667, "longitud": -76.55978611},
    {"nombre": "ARGOS - CALI", "pais": "Colombia", "latitud": 3.512194271, "longitud": -76.50634381},
    {"nombre": "ARGOS - PTO TEJADA", "pais": "Colombia", "latitud": 3.277750324, "longitud": -76.46963992},
    {"nombre": "ARGOS - NEIVA", "pais": "Colombia", "latitud": 2.927617624, "longitud": -75.31597633},
    {"nombre": "ARGOS - FLANDES", "pais": "Colombia", "latitud": 4.256985763, "longitud": -74.82849917},
    {"nombre": "ARGOS - PEREIRA", "pais": "Colombia", "latitud": 4.811021505, "longitud": -75.76459078},
    {"nombre": "ARGOS - MANIZALES", "pais": "Colombia", "latitud": 5.039814231, "longitud": -75.49408833},
    {"nombre": "ARGOS - VILLAVICENCIO", "pais": "Colombia", "latitud": 4.048995721, "longitud": -73.73255259},
    {"nombre": "ARGOS - MEDELLÍN", "pais": "Colombia", "latitud": 6.270371064, "longitud": -75.57503736},
    {"nombre": "ARGOS - MED GUAYABAL", "pais": "Colombia", "latitud": 6.220744375, "longitud": -75.57786038},
    {"nombre": "ARGOS - BELLO", "pais": "Colombia", "latitud": 6.317466894, "longitud": -75.54675293},
    {"nombre": "ARGOS - SABANETA", "pais": "Colombia", "latitud": 6.142161111, "longitud": -75.63240556},
    {"nombre": "ARGOS - RIONEGRO", "pais": "Colombia", "latitud": 6.171605, "longitud": -75.364625},
    {"nombre": "ARGOS - CAJICÁ", "pais": "Colombia", "latitud": 4.97262001, "longitud": -74.00417922},
    {"nombre": "ARGOS - TUNJA", "pais": "Colombia", "latitud": 5.508793757, "longitud": -73.35838678},
    {"nombre": "ARGOS - BARRANCABERMEJA", "pais": "Colombia", "latitud": 7.084954587, "longitud": -73.88937324},
    {"nombre": "ARGOS - BUCARAMANGA", "pais": "Colombia", "latitud": 7.139348777, "longitud": -73.15530104},
    {"nombre": "ARGOS - STA MARTA VARIANTE", "pais": "Colombia", "latitud": 11.12573589, "longitud": -74.21399666},
    {"nombre": "ARGOS - STA MTA TRONCAL CARIBE", "pais": "Colombia", "latitud": 11.19651249, "longitud": -74.20427004},
    {"nombre": "ARGOS - SOLEDAD", "pais": "Colombia", "latitud": 10.91328578, "longitud": -74.77666351},
    {"nombre": "ARGOS - BARRANQUILLA", "pais": "Colombia", "latitud": 11.03380234, "longitud": -74.81575181},
    {"nombre": "ULTRACEM - CARTAGENA", "pais": "Colombia", "latitud": 10.38620475, "longitud": -75.44492398},
    {"nombre": "ALCONCRETOS - MONTERÍA", "pais": "Colombia", "latitud": 8.779654085, "longitud": -75.8767036},
    {"nombre": "COLCONCRETOS - NOBSA", "pais": "Colombia", "latitud": 5.754279, "longitud": -72.938809},
    {"nombre": "CONCREIBAGUE - IBAGUÉ", "pais": "Colombia", "latitud": 4.420928, "longitud": -75.181425},
    {"nombre": "CONCRESUR - PASTO", "pais": "Colombia", "latitud": 1.250169, "longitud": -77.32326},
    {"nombre": "CONCRETEC DEL ORIENTE SAS - YOPAL", "pais": "Colombia", "latitud": 5.358171, "longitud": -72.379454},
    {"nombre": "CONCRETOLIMA - IBAGUÉ", "pais": "Colombia", "latitud": 4.42456, "longitud": -75.189061},
    {"nombre": "CONCRETOS DE LA COSTA - MONTERÍA", "pais": "Colombia", "latitud": 8.7416, "longitud": -75.907551},
    {"nombre": "CONCRETOS DE LA SABANA - SINCELEJO", "pais": "Colombia", "latitud": 9.31242, "longitud": -75.414372},
    {"nombre": "CONCRENORTE - SINCELEJO", "pais": "Colombia", "latitud": 9.278649, "longitud": -75.401876},
    {"nombre": "CONCRETOS DEL SINU - MONTERÍA", "pais": "Colombia", "latitud": 8.74039, "longitud": -75.908305},
    {"nombre": "CONSTRUCCIONES EL CAIRO - PEREIRA", "pais": "Colombia", "latitud": 4.936492, "longitud": -75.861765},
    {"nombre": "CONCRETOS EL DORADO - VALLEDUPAR", "pais": "Colombia", "latitud": 10.457611, "longitud": -73.295651},
    {"nombre": "HOLCIM - BARRANQUILLA", "pais": "Colombia", "latitud": 10.96076, "longitud": -74.886396},
    {"nombre": "MPO (CLIMACO TRUJILLO) - VILLAVICENCIO", "pais": "Colombia", "latitud": 4.15942, "longitud": -73.636712},
    {"nombre": "NORCONCRETOS - NTE SANT", "pais": "Colombia", "latitud": 7.823597, "longitud": -72.516528},
    {"nombre": "POLIMIX - USME", "pais": "Colombia", "latitud": 4.549521232, "longitud": -74.1209699},
    {"nombre": "PREFABRICADOS OCAIMA - NEIVA", "pais": "Colombia", "latitud": 2.962898, "longitud": -75.289029},
    {"nombre": "PREVESA - GIRÓN", "pais": "Colombia", "latitud": 7.065226, "longitud": -73.139735},
    {"nombre": "CONCRETOS INDUSTRIALES DE SUCRE - SINCELEJO", "pais": "Colombia", "latitud": 9.276531, "longitud": -75.405846},
    {"nombre": "CPC - FONTIBÓN", "pais": "Colombia", "latitud": 4.677087, "longitud": -74.169275},
    {"nombre": "PREFABRICAR Y CONSTRUIR - CHIA", "pais": "Colombia", "latitud": 4.874788, "longitud": -74.040024},
    {"nombre": "HOLCIM - PALMIRA", "pais": "Colombia", "latitud": 3.493655, "longitud": -76.480369},
    {"nombre": "HOLCIM - TUNJUELITO", "pais": "Colombia", "latitud": 4.544838889, "longitud": -74.12166944},
    {"nombre": "ROCALES Y CONCRETOS - YUMBO", "pais": "Colombia", "latitud": 3.514184, "longitud": -76.514153},
    {"nombre": "ARGOS - SOACHA", "pais": "Colombia", "latitud": 4.590070715, "longitud": -74.18618598},
    {"nombre": "POLIMIX - BARRANQUILLA", "pais": "Colombia", "latitud": 10.960759, "longitud": -74.886395},
    {"nombre": "HORMIGÓN ANDINO S.A. - COTA", "pais": "Colombia", "latitud": 4.781621, "longitud": -74.14778},
    {"nombre": "HOLCIM - PTO TEJADA", "pais": "Colombia", "latitud": 3.3112086, "longitud": -76.4859887},
    {"nombre": "ARGOS - ZIPACÓN", "pais": "Colombia", "latitud": 4.73945, "longitud": -74.3936},
    {"nombre": "CONCRETOS LA HACIENDA - MADRID (CUN)", "pais": "Colombia", "latitud": 4.77542, "longitud": -74.3214},
    {"nombre": "ARGOS - MARINILLA", "pais": "Colombia", "latitud": 6.178587705, "longitud": -75.35760402},
    {"nombre": "CONCREMOVIL S.A.S - TUNJUELO USME", "pais": "Colombia", "latitud": 4.542060138, "longitud": -74.12898866},
    {"nombre": "MYA GROUP CONCRETOS SAS - NORMANDÍA", "pais": "Colombia", "latitud": 4.678082786, "longitud": -74.17271362},
    {"nombre": "MYA GROUP CONCRETOS SAS - VERGANZO", "pais": "Colombia", "latitud": 4.968897507, "longitud": -73.96545196},
    {"nombre": "POLIMIX - CARTAGENA", "pais": "Colombia", "latitud": 10.36153708, "longitud": -75.50568318},
];

// Función para calcular distancia (Haversine)
function calcularDistancia(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radio de la Tierra en km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos((lat1 * Math.PI) / 180) *
            Math.cos((lat2 * Math.PI) / 180) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Resultado en kilómetros
}

// Inicializar el mapa
const map = L.map("map").setView([4.0, -74.0], 6); // Ubicación inicial en Colombia
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
}).addTo(map);

// Función para buscar plantas cercanas
function buscarPlantasCercanas(lat, lon, radio = 150) {
    return plantas
        .map((planta) => ({
            ...planta,
            distancia: calcularDistancia(lat, lon, planta.latitud, planta.longitud),
        }))
        .filter((planta) => planta.distancia <= radio)
        .sort((a, b) => a.distancia - b.distancia)
        .slice(0, 10); // Top 10
}

// Manejar evento de búsqueda
document.getElementById("search").addEventListener("click", () => {
    const latitud = parseFloat(document.getElementById("latitude").value);
    const longitud = parseFloat(document.getElementById("longitude").value);

    if (isNaN(latitud) || isNaN(longitud)) {
        alert("Por favor, ingresa coordenadas válidas.");
        return;
    }

    // Limpiar mapa y resultados
    map.setView([latitud, longitud], 8);
    map.eachLayer((layer) => {
        if (!layer._url) map.removeLayer(layer);
    });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
    }).addTo(map);

    // Agregar marcador para el usuario
    L.marker([latitud, longitud])
        .addTo(map)
        .bindPopup("Tu ubicación")
        .openPopup();

    // Buscar plantas cercanas
    const resultados = buscarPlantasCercanas(latitud, longitud);
    const lista = document.getElementById("plant-list");
    lista.innerHTML = "";

    resultados.forEach((planta) => {
        // Agregar plantas al mapa
        L.marker([planta.latitud, planta.longitud], { icon: L.icon({ iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png', iconSize: [25, 41] }) })
            .addTo(map)
            .bindPopup(`${planta.nombre} - Distancia: ${planta.distancia.toFixed(2)} km`);
        // Mostrar plantas en la lista
        const item = document.createElement("li");
        item.textContent = `${planta.nombre} - Distancia: ${planta.distancia.toFixed(2)} km`;
        lista.appendChild(item);
    });
});
