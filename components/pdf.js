import {
  Page,
  Text,
  Document,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  mainTitle: {
    fontSize: 30,
    textAlign: "center",
    fontFamily: "h1",
    color: "#a51c30",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "h1",
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    fontFamily: "h2",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: "h2",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "main",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
    fontFamily: "thin",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

// Create Document Component
const MyDocument = (props) => (
  <Document>
    <Page style={styles.body}>
      <Text style={styles.header} fixed>
        樊恭烋荣誉学院
      </Text>
      <Text style={styles.mainTitle}>樊恭烋荣誉学院学生成长记录册</Text>
      <Text style={styles.author}>18021006 吴天鹤</Text>
      <Text style={styles.subtitle}>
        Capítulo I: Que trata de la condición y ejercicio del famoso hidalgo D.
        Quijote de la Mancha
      </Text>
      <Image style={styles.image} src={props.images.test}></Image>
      <Text style={styles.text}>
        北京工业大学樊恭烋荣誉学院（以下简称“樊恭烋学院”）创办于2014年，
        是学校为进一步创新人才培养模式，推进教学方法、教学内容和学习方法改革，培养工程领域领军人才而设立的荣誉学院，是学校“高等工程教育人才培养模式创新实验区”。学院以北京工业大学原校长樊恭烋先生命名，充分发挥学校工程教育优质教学资源优势，积极创新人才培养模式，通过强化理工基础和创新教育，尊重学生对专业的兴趣与选择，因材施教，着重学生工程基础的夯实、优秀工程能力和创新精神的养成和持久竞争力的发展，培养国际、国内工程领域具有创新精神的领军人才。为夯实必要的理工和创新基础，拓宽国际视野，学院从建立探索为本的新生年开始，鼓励学生开展研究性学习，在不断获得高峰体验的过程中，学习研究的方法和思路，建立探索未知的意识和思想以及克服困难的信心和意志，面向未来，保障创新的可持续性。
      </Text>
      <Text style={styles.text}>
        Es, pues, de saber, que este sobredicho hidalgo, los ratos que estaba
        ocioso (que eran los más del año) se daba a leer libros de caballerías
        con tanta afición y gusto, que olvidó casi de todo punto el ejercicio de
        la caza, y aun la administración de su hacienda; y llegó a tanto su
        curiosidad y desatino en esto, que vendió muchas hanegas de tierra de
        sembradura, para comprar libros de caballerías en que leer; y así llevó
        a su casa todos cuantos pudo haber dellos; y de todos ningunos le
        parecían tan bien como los que compuso el famoso Feliciano de Silva:
        porque la claridad de su prosa, y aquellas intrincadas razones suyas, le
        parecían de perlas; y más cuando llegaba a leer aquellos requiebros y
        cartas de desafío, donde en muchas partes hallaba escrito: la razón de
        la sinrazón que a mi razón se hace, de tal manera mi razón enflaquece,
        que con razón me quejo de la vuestra fermosura, y también cuando leía:
        los altos cielos que de vuestra divinidad divinamente con las estrellas
        se fortifican, y os hacen merecedora del merecimiento que merece la
        vuestra grandeza.
      </Text>
      <Text style={styles.text}>
        Con estas y semejantes razones perdía el pobre caballero el juicio, y
        desvelábase por entenderlas, y desentrañarles el sentido, que no se lo
        sacara, ni las entendiera el mismo Aristóteles, si resucitara para sólo
        ello. No estaba muy bien con las heridas que don Belianis daba y
        recibía, porque se imaginaba que por grandes maestros que le hubiesen
        curado, no dejaría de tener el rostro y todo el cuerpo lleno de
        cicatrices y señales; pero con todo alababa en su autor aquel acabar su
        libro con la promesa de aquella inacabable aventura, y muchas veces le
        vino deseo de tomar la pluma, y darle fin al pie de la letra como allí
        se promete; y sin duda alguna lo hiciera, y aun saliera con ello, si
        otros mayores y continuos pensamientos no se lo estorbaran. Tuvo muchas
        veces competencia con el cura de su lugar (que era hombre docto graduado
        en Sigüenza), sobre cuál había sido mejor caballero, Palmerín de
        Inglaterra o Amadís de Gaula; mas maese Nicolás, barbero del mismo
        pueblo, decía que ninguno llegaba al caballero del Febo, y que si alguno
        se le podía comparar, era don Galaor, hermano de Amadís de Gaula, porque
        tenía muy acomodada condición para todo; que no era caballero
        melindroso, ni tan llorón como su hermano, y que en lo de la valentía no
        le iba en zaga.
      </Text>
      <Text style={styles.text}>
        En resolución, él se enfrascó tanto en su lectura, que se le pasaban las
        noches leyendo de claro en claro, y los días de turbio en turbio, y así,
        del poco dormir y del mucho leer, se le secó el cerebro, de manera que
        vino a perder el juicio. Llenósele la fantasía de todo aquello que leía
        en los libros, así de encantamientos, como de pendencias, batallas,
        desafíos, heridas, requiebros, amores, tormentas y disparates
        imposibles, y asentósele de tal modo en la imaginación que era verdad
        toda aquella máquina de aquellas soñadas invenciones que leía, que para
        él no había otra historia más cierta en el mundo.
      </Text>
      <Text style={styles.subtitle} break>
        Capítulo II: Que trata de la primera salida que de su tierra hizo el
        ingenioso Don Quijote
      </Text>
      <Text style={styles.text}>
        Hechas, pues, estas prevenciones, no quiso aguardar más tiempo a poner
        en efeto su pensamiento, apretándole a ello la falta que él pensaba que
        hacía en el mundo su tardanza, según eran los agravios que pensaba
        deshacer, tuertos que enderezar, sinrazones que emendar y abusos que
        mejorar y deudas que satisfacer. Y así, sin dar parte a persona alguna
        de su intención y sin que nadie le viese, una mañana, antes del día, que
        era uno de los calurosos del mes de Julio, se armó de todas sus armas,
        subió sobre Rocinante, puesta su mal compuesta celada, embrazó su
        adarga, tomó su lanza y por la puerta falsa de un corral salió al campo
        con grandísimo contento y alborozo de ver con cuánta facilidad había
        dado principio a su buen deseo. Mas apenas se vio en el campo cuando le
        asaltó un pensamiento terrible, y tal, que por poco le hiciera dejar la
        comenzada empresa; y fue que le vino a la memoria que no era armado
        caballero, y que, conforme a ley de caballería, ni podía ni debía tomar
        armas con ningún caballero; y puesto que lo fuera, había de llevar armas
        blancas, como novel caballero, sin empresa en el escudo, hasta que por
        su esfuerzo la ganase. Estos pensamientos le hicieron titubear en su
        propósito; mas pudiendo más su locura que otra razón alguna, propuso de
        hacerse armar caballero del primero que topase, a imitación de otros
        muchos que así lo hicieron, según él había leído en los libros que tal
        le tenían. En lo de las armas blancas, pensaba limpiarlas de manera, en
        teniendo lugar, que lo fuesen más que un arminio; y con esto se quietó18
        y prosiguió su camino, sin llevar otro que aquel que su caballo quería,
        creyendo que en aquello consistía la fuerza de las aventuras
      </Text>
      <Text style={styles.text}>
        Yendo, pues, caminando nuestro flamante aventurero, iba hablando consigo
        mesmo, y diciendo: —¿Quién duda, sino que en los venideros tiempos,
        cuando salga a luz la verdadera historia de mis famosos hechos, que el
        sabio que los escribiere no ponga, cuando llegue a contar esta mi
        primera salida tan de mañana, desta manera?: Apenas había el rubicundo
        Apolo tendido por la faz de la ancha y espaciosa tierra las doradas
        hebras de sus hermosos cabellos, y apenas los pequeños y pintados
        pajarillos con sus arpadas lenguas habían saludado con dulce y meliflua
        armonía la venida de la rosada Aurora, que, dejando la blanda cama del
        celoso marido, por las puertas y balcones del manchego horizonte a los
        mortales se mostraba, cuando el famoso caballero don Quijote de la
        Mancha, dejando las ociosas plumas, subió sobre su famoso caballo
        Rocinante y comenzó a caminar por el antiguo y conocido Campo de
        Montiel.
      </Text>
      <Text style={styles.text}>
        Y era la verdad que por él caminaba; y añadió diciendo: —Dichosa edad y
        siglo dichoso aquel adonde saldrán a luz las famosas hazañas mías,
        dignas de entallarse en bronces, esculpirse en mármoles y pintarse en
        tablas, para memoria en lo futuro. ¡Oh tú, sabio encantador, quienquiera
        que seas, a quien ha de tocar el ser coronista desta peregrina historia!
        Ruégote que no te olvides de mi buen Rocinante, compañero eterno mío en
        todos mis caminos y carreras.
      </Text>
      <Text style={styles.text}>
        Luego volvía diciendo, como si verdaderamente fuera enamorado: —¡Oh
        princesa Dulcinea, señora deste cautivo corazón! Mucho agravio me
        habedes fecho en despedirme y reprocharme con el riguroso afincamiento
        de mandarme no parecer ante la vuestra fermosura. Plégaos, señora, de
        membraros deste vuestro sujeto corazón, que tantas cuitas por vuestro
        amor padece. Con estos iba ensartando otros disparates, todos al modo de
        los que sus libros le habían enseñado, imitando en cuanto podía su
        lenguaje. Con esto caminaba tan despacio, y el sol entraba tan apriesa y
        con tanto ardor, que fuera bastante a derretirle los sesos, si algunos
        tuviera
      </Text>
      <Text style={styles.text}>
        Casi todo aquel día caminó sin acontecerle cosa que de contar fuese, de
        lo cual se desesperaba, porque quisiera topar luego luego con quien
        hacer experiencia del valor de su fuerte brazo. Autores hay que dicen
        que la primera aventura que le avino fue la del Puerto Lápice, otros
        dicen que la de los molinos de viento; pero lo que yo he podido
        averiguar en este caso, y lo que he hallado escrito en los anales de la
        Mancha, es que él anduvo todo aquel día, y, al anochecer, su rocín y él
        se hallaron cansados y muertos de hambre, y que, mirando a todas partes
        por ver si descubriría algún castillo o alguna majada de pastores donde
        recogerse y adonde pudiese remediar su mucha hambre y necesidad, vio, no
        lejos del camino por donde iba, una venta,que fue como si viera una
        estrella que, no a los portales, sino a los alcázares de su redención le
        encaminaba. Diose priesa a caminar, y llegó a ella a tiempo que
        anochecía.
      </Text>
      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
    </Page>
  </Document>
);

Font.register({
  family: "h1",
  src: "/fonts/NotoSansSC-Black.otf",
});

Font.register({
  family: "h2",
  src: "/fonts/NotoSansSC-Bold.otf",
});

Font.register({
  family: "h3",
  src: "/fonts/NotoSansSC-Medium.otf",
});

Font.register({
  family: "main",
  src: "/fonts/NotoSansSC-Regular.otf",
});

Font.register({
  family: "light",
  src: "/fonts/NotoSansSC-Light.otf",
});

Font.register({
  family: "thin",
  src: "/fonts/NotoSansSC-Thin.otf",
});

const PDF = (props) => {
  return (
    <PDFViewer>
      <MyDocument images={props.images} />
    </PDFViewer>
  );
};

export default PDF;
