import { Modal } from '@fafty-frontend/modals';
import { useAuth } from '../../utils/auth';
import Image from 'next/image';
import classNames from 'classnames';
import { ReactComponent as PlugLogo } from '../../assets/plug.svg';
import { ReactComponent as InternetIdentityLogo } from '../../assets/internet-identity.svg';


type Props = {
  onClose: () => void;
  isOpened: boolean;
};

const List = [
  {
    name: 'Plug',
    value: 'plug',
    logo: {
      src: PlugLogo,
      fill: null,
    },
  },
  {
    name: 'Internet identity',
    value: 'ii',
    logo: {
      src: InternetIdentityLogo,
      fill: 'fill-[#23262F] dark:fill-[#F4F5F6]'
    },
  },
];

export const AuthModal = ({ isOpened, onClose }: Props) => {
  const auth = useAuth();

  const onClickAuth = (key: string) => () => {
    if (key === 'ii') {
      auth.useInternetIdentity();
    } else if (key === 'plug') {
      auth.usePlug();
    }

    onClose();
  };

  return (
    <Modal
      title="Select wallet"
      open={isOpened}
      onDismiss={onClose}
      options={{ dismissible: true }}
    >
      <div className="flex flex-row h-full w-full p-5">
        <div className="pr-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="250"
            viewBox="0 0 559.17449 582.5"
          >
            <path
              d="M833.2667,657.09714l-25.61328,23.58008,20.35547-34.15484c-16.03711-29.0821-42.26563-54.21613-42.26563-54.21613s-54.415,52.13391-54.415,93.11456,24.36231,55.28956,54.415,55.28956c30.05225,0,54.41455-14.3089,54.41455-55.28956C840.15781,676.29935,837.4581,666.62583,833.2667,657.09714Z"
              transform="translate(-320.41275 -158.75)"
              fill="#f2f2f2"
            />
            <path
              d="M801.0664,681.95377v2.02c-.12,23.48-4.08,41.8-11.85,54.7-.11.19-.23.37-.34.56l-.87-.53-.83-.52c8.62-13.93,11.67-33.62,11.78-54.1.01-.66.02-1.33.01-2-.03-8.67005-.56-17.44-1.41-25.96-.06-.66-.13-1.33-.2-2-1.18-11.24-2.88-21.98-4.62-31.31-.12-.66-.25-1.32-.38-1.97-3.01-15.78-6.08-27.21-6.78-29.74-.08-.31-.13-.48-.14-.52l.95-.27.01-.01.96-.27c.01.04.18.61005.46,1.67,1.07,3.96,3.85,14.71,6.58,28.89.12.64.25,1.3.37,1.96,1.42,7.57,2.81,16.03,3.91,24.91q.42,3.34506.75,6.6c.08.67.15,1.34.21,2Q801.01648,669.87879,801.0664,681.95377Z"
              transform="translate(-320.41275 -158.75)"
              fill="#fff"
            />
            <path
              d="M794.39641,620.59373c-.67.09-1.35.18-2.04.25a55.1675,55.1675,0,0,1-5.64.29,53.66371,53.66371,0,0,1-23.2-5.24c-.42.53-.84,1.06-1.27,1.6a55.65066,55.65066,0,0,0,24.47,5.64,57.08008,57.08008,0,0,0,6.02-.32c.68-.07,1.36-.16,2.03-.26a55.18211,55.18211,0,0,0,15.95-4.83q-.645-.825-1.26-1.62A53.47953,53.47953,0,0,1,794.39641,620.59373Z"
              transform="translate(-320.41275 -158.75)"
              fill="#fff"
            />
            <path
              d="M799.42644,654.06376q-1.035.06-2.07.06c-.21.01-.43.01-.64.01a53.94832,53.94832,0,0,1-44.28-23.13c-.4.59-.8,1.18-1.18994,1.78a55.95155,55.95155,0,0,0,45.47,23.35c.28,0,.56,0,.84-.01.69995-.01,1.38995-.03,2.07995-.06a55.65566,55.65566,0,0,0,29.65-10.4c-.32-.59-.64-1.18-.97-1.76995A53.57789,53.57789,0,0,1,799.42644,654.06376Z"
              transform="translate(-320.41275 -158.75)"
              fill="#fff"
            />
            <path
              d="M801.0664,681.95377c-.7.06-1.4.1-2.1.13-.75.03-1.5.05-2.25.05a54.09422,54.09422,0,0,1-51.86-38.92005c-.45.81006-.9,1.61005-1.33,2.42005a56.07516,56.07516,0,0,0,53.19,38.5c.75,0,1.5-.01,2.24-.05.71-.02,1.41-.06,2.11-.11005a55.91109,55.91109,0,0,0,36.9-18.01c-.21-.74-.45-1.47-.69-2.21A53.91969,53.91969,0,0,1,801.0664,681.95377Z"
              transform="translate(-320.41275 -158.75)"
              fill="#fff"
            />
            <path
              id="f3dd3be3-e3f2-4729-8854-c6cb5bd65852-186"
              data-name="Rectangle 1 - Outline"
              d="M741.15954,284.69886,462.5712,249.18105a18.08642,18.08642,0,0,0-2.263-.14685,17.25807,17.25807,0,0,0-2.23055.14083,17.06478,17.06478,0,0,0-2.18962.42854,17.49793,17.49793,0,0,0-2.14026.72225,18.22231,18.22231,0,0,0-1.9922.963,18.95742,18.95742,0,0,0-1.88868,1.20375,20.2224,20.2224,0,0,0-1.77674,1.45051,22.08582,22.08582,0,0,0-1.65877,1.68525,23.76228,23.76228,0,0,0-1.5119,1.90433q-.71386,1.00272-1.33978,2.0861-.62592,1.087-1.16161,2.26064t-.97746,2.42675q-.45741,1.29524-.80168,2.64825t-.57539,2.753q-.2263,1.39876-.34667,2.84326t-.12038,2.9239q.00479,1.4782.12038,2.94678t.34667,2.91307q.23354,1.45053.57778,2.87215t.80167,2.81075q.44176,1.34218.97746,2.623.53567,1.282,1.16162,2.49416t1.33978,2.35454q.71265,1.14717,1.51192,2.20767t1.65877,2.0235q.85947.957,1.77673,1.80563t1.88868,1.58533a23.62545,23.62545,0,0,0,1.99221,1.35783,21.76532,21.76532,0,0,0,2.14026,1.14717,20.07486,20.07486,0,0,0,2.18962.86791,18.97421,18.97421,0,0,0,2.23054.58863,18.4762,18.4762,0,0,0,2.26305.307L741.162,326.75784a7.05621,7.05621,0,0,0,2.40749-.24075,7.55151,7.55151,0,0,0,1.16162-.42854,8.5987,8.5987,0,0,0,1.12791-.632,10.03506,10.03506,0,0,0,1.04245-.79447,11.67582,11.67582,0,0,0,.98226-.963,13.85174,13.85174,0,0,0,.91846-1.1267q.44418-.60429.85346-1.288t.774-1.42644q.36474-.74271.68252-1.54321.319-.79929.58984-1.65395t.49354-1.75988q.23472-.93651.40446-1.90674t.2901-1.96933q.11676-.99912.17454-2.02471t.05778-2.07406q-.0036-1.04727-.05778-2.08489t-.17454-2.05961q-.11676-1.022-.2901-2.02711t-.40446-1.9886q-.2227-.95094-.49354-1.85858-.26844-.89559-.58984-1.7647t-.68252-1.68525q-.36354-.81494-.774-1.58172t-.85346-1.459q-.443-.69216-.91846-1.31208t-.98226-1.16042a13.498,13.498,0,0,0-1.04245-1.00392,11.32484,11.32484,0,0,0-1.12791-.85828,9.50166,9.50166,0,0,0-1.16162-.66206,8.27458,8.27458,0,0,0-1.19171-.46224,7.5967,7.5967,0,0,0-1.21819-.2588"
              transform="translate(-320.41275 -158.75)"
              fill="#6c63ff"
            />
            <path
              id="f1003c66-3f14-4be1-907c-7cdab0d8529f-187"
              data-name="Rectangle 3 - Outline"
              d="M741.15954,364.80471,462.5712,358.13233a17.90946,17.90946,0,0,0-4.4936.45863,18.34354,18.34354,0,0,0-2.18962.656,19.41846,19.41846,0,0,0-2.14026.93892,20.721,20.721,0,0,0-1.9922,1.16523,21.90247,21.90247,0,0,0-1.88868,1.40237,23.57934,23.57934,0,0,0-1.77674,1.63469q-.86069.87631-1.65877,1.8634-.79809.98947-1.5119,2.062-.71386,1.07254-1.33978,2.22453t-1.16161,2.381q-.53567,1.229-.97746,2.52787-.45741,1.3446-.80168,2.73251t-.57539,2.812q-.2263,1.424-.34667,2.88057t-.12038,2.93594q.00479,1.47941.12038,2.93474t.34667,2.87816q.23354,1.41563.57778,2.80113t.80167,2.72769q.44176,1.30245.97746,2.52787t1.16162,2.37379q.626,1.14839,1.33978,2.2161.71265,1.06412,1.51192,2.04638t1.65877,1.85257a23.35111,23.35111,0,0,0,1.77673,1.62385,21.70914,21.70914,0,0,0,1.88868,1.39033,20.54423,20.54423,0,0,0,1.99221,1.152,19.27673,19.27673,0,0,0,2.14026.92568,18.248,18.248,0,0,0,2.18962.6416,17.81682,17.81682,0,0,0,2.23054.36113,18.00466,18.00466,0,0,0,2.26305.07343l278.58594-8.4756a7.25286,7.25286,0,0,0,1.21819-.14084,7.57443,7.57443,0,0,0,1.19171-.34547,8.43654,8.43654,0,0,0,1.16162-.54891,9.87072,9.87072,0,0,0,1.12791-.74873,11.67646,11.67646,0,0,0,1.04245-.90282,13.63477,13.63477,0,0,0,.98226-1.06411q.47427-.56815.91846-1.2218t.85346-1.37589q.40927-.72706.774-1.50709t.68252-1.613q.319-.84624.58984-1.72257t.49354-1.80562q.23472-.951.40446-1.93924t.2901-1.99943q.11676-1.01475.17454-2.04637t.05778-2.08008q-.0036-1.03882-.05778-2.07526t-.17454-2.04637q-.11676-1.01355-.2901-1.997t-.40446-1.94646q-.22391-.9293-.49474-1.81044t-.58864-1.71173q-.31658-.83058-.68132-1.60941t-.774-1.50108q-.41047-.72345-.85346-1.37227t-.91846-1.217a13.50491,13.50491,0,0,0-.98226-1.05809,11.56584,11.56584,0,0,0-1.04244-.89559,9.78426,9.78426,0,0,0-1.12791-.74151,8.37239,8.37239,0,0,0-1.16283-.53928,7.53579,7.53579,0,0,0-1.19171-.33825,7.23677,7.23677,0,0,0-1.21819-.13242"
              transform="translate(-320.41275 -158.75)"
              fill="#e4e4e4"
            />
            <path
              id="e5b3fa8a-e15d-46b1-859f-01f7147e98c8-188"
              data-name="Rectangle 4 - Outline"
              d="M741.15954,439.903,462.5712,460.27761a18.476,18.476,0,0,0-2.263.307,18.97437,18.97437,0,0,0-2.23055.58863,20.07646,20.07646,0,0,0-2.18962.86791,21.77069,21.77069,0,0,0-2.14026,1.14717,23.63015,23.63015,0,0,0-1.9922,1.35783q-.97263.74271-1.88868,1.58533-.91605.84624-1.77674,1.80562t-1.65877,2.02351q-.79809,1.06771-1.5119,2.21008-.71386,1.14235-1.33978,2.35453-.62592,1.21338-1.16161,2.49417t-.97746,2.623q-.45741,1.38672-.80168,2.81075t-.57539,2.86853q-.2263,1.44691-.34667,2.91428t-.12038,2.94677q.00479,1.47942.12038,2.92391t.34667,2.84445q.23354,1.40358.57778,2.75418t.80167,2.64825q.44176,1.2543.97746,2.42675.53567,1.17366,1.16162,2.26064t1.33978,2.0861a23.75758,23.75758,0,0,0,1.51192,1.90433,22.084,22.084,0,0,0,1.65877,1.68525,20.22418,20.22418,0,0,0,1.77673,1.45052,18.96039,18.96039,0,0,0,1.88868,1.20375,18.22157,18.22157,0,0,0,1.99221.963,17.49224,17.49224,0,0,0,2.14026.72225,17.06646,17.06646,0,0,0,2.18962.42853,17.2597,17.2597,0,0,0,2.23054.14084,18.092,18.092,0,0,0,2.26305-.14686l278.58594-35.50938a7.59564,7.59564,0,0,0,1.21819-.25881,8.2722,8.2722,0,0,0,1.19171-.46223,9.50166,9.50166,0,0,0,1.16162-.66206,11.32484,11.32484,0,0,0,1.12791-.85828,13.498,13.498,0,0,0,1.04245-1.00392q.50076-.5417.98226-1.16042.47427-.61872.91846-1.31208t.85346-1.45895q.40927-.76077.774-1.58172t.68252-1.68525q.319-.8679.58984-1.77553t.49354-1.85859q.23472-.98466.40446-1.98979t.2901-2.02712q.11676-1.022.17454-2.05961t.05778-2.0861q-.00482-1.04244-.059-2.068t-.17454-2.0247q-.11556-1.00272-.2889-1.973t-.40446-1.90673q-.2227-.90643-.49354-1.75988-.26722-.85345-.58863-1.654t-.68253-1.54321q-.36714-.73669-.77762-1.42283t-.85346-1.288a13.85361,13.85361,0,0,0-.91846-1.12671,11.67725,11.67725,0,0,0-.98226-.963,10.03354,10.03354,0,0,0-1.04244-.79447,8.59881,8.59881,0,0,0-1.12792-.632,7.55278,7.55278,0,0,0-1.16161-.42853,7.055,7.055,0,0,0-2.4075-.24075"
              transform="translate(-320.41275 -158.75)"
              fill="#e4e4e4"
            />
            <path
              id="bafb1f3d-b2ca-45c8-ab7e-ed03dda6d8fc-189"
              data-name="Path 5"
              d="M589.31356,443.63612a13.97191,13.97191,0,0,0,25.28668-11.43927l53.99307-110.92544-25.84464-15.66755L596.11918,423.42923q-.26727.1039-.52648.21776t-.51651.23781q-.25729.12394-.51073.26081t-.50318.28777a13.98877,13.98877,0,0,0-4.7497,19.20135Z"
              transform="translate(-320.41275 -158.75)"
              fill="#9e616a"
            />
            <path
              id="a23fb8c4-4f70-46f7-bb51-5893ecfd1d6a-190"
              data-name="Path 8"
              d="M658.28678,364.0447l-38.35735-9.83117s1.25229-2.831,3.28772-7.52113,4.8793-11.23028,8.07832-18.65563,6.74836-15.72208,10.21514-23.92319,6.8383-16.3039,9.678-23.32731,6.0655-11.22974,9.30769-13.58719a12.797,12.797,0,0,1,9.40493-2.50021,18.17652,18.17652,0,0,1,7.27738,2.77018A19.818,19.818,0,0,1,680.1,269.6863l8.89339,16.17314Z"
              transform="translate(-320.41275 -158.75)"
              fill="#ccc"
            />
            <path
              id="bf4ad07a-caea-45f0-95a0-f5e060234fe8-191"
              data-name="Ellipse 3 - Outline"
              d="M351.31474,355.2602a24.91786,24.91786,0,0,0-2.76862.36112,25.34288,25.34288,0,0,0-2.7289.66929,26.35031,26.35031,0,0,0-2.67954.97985,27.95921,27.95921,0,0,0-2.62056,1.288q-1.24828.70177-2.44,1.52635t-2.31481,1.77192q-1.12189.94494-2.17758,2.01507t-2.03433,2.257q-.97865,1.1869-1.855,2.45926t-1.64432,2.62177q-.76077,1.3518-1.42283,2.777t-1.20375,2.91669q-.56455,1.5468-.98828,3.12612t-.7066,3.18512q-.28409,1.60581-.42613,3.23327t-.142,3.26818q0,1.6407.142,3.23929t.42613,3.1478q.28288,1.54923.7066,3.04308t.98467,2.92631q.54649,1.38311,1.20374,2.67593a28.57528,28.57528,0,0,0,1.42525,2.48936,27.29148,27.29148,0,0,0,1.64432,2.28712,26.5101,26.5101,0,0,0,1.85618,2.09092,25.40859,25.40859,0,0,0,2.03433,1.849,24.07346,24.07346,0,0,0,2.17879,1.58052,23.19147,23.19147,0,0,0,4.7548,2.34009,22.74389,22.74389,0,0,0,5.2965,1.20375,23.28722,23.28722,0,0,0,2.7289.12037,24.48725,24.48725,0,0,0,2.76862-.19621,25.37071,25.37071,0,0,0,2.75417-.50677,25.87151,25.87151,0,0,0,2.69038-.80772,26.9475,26.9475,0,0,0,2.61815-1.10384,28.59917,28.59917,0,0,0,2.53751-1.39394q1.20014-.74872,2.33767-1.6058t2.20407-1.82729q1.06651-.97021,2.05961-2.04637t1.90915-2.25823q.92206-1.18088,1.7358-2.43278t1.524-2.57q.71021-1.31811,1.31449-2.6976t1.10143-2.81677q.5152-1.48784.90161-3.00095t.64521-3.04789q.2576-1.536.38761-3.08762t.13-3.1165q-.0012-1.56487-.13-3.09123t-.38761-3.00937q-.25761-1.4806-.64521-2.91789t-.90161-2.82038q-.49955-1.33857-1.10143-2.59648-.61029-1.25432-1.32051-2.434a27.302,27.302,0,0,0-3.25373-4.34915,25.78491,25.78491,0,0,0-1.90433-1.87664,24.39316,24.39316,0,0,0-2.05962-1.63349,23.56323,23.56323,0,0,0-2.20406-1.38551,23.29159,23.29159,0,0,0-2.34249-1.13153,22.72132,22.72132,0,0,0-5.15445-1.46255,23.07057,23.07057,0,0,0-2.69038-.26844,24.14532,24.14532,0,0,0-2.75418.04575"
              transform="translate(-320.41275 -158.75)"
              fill="#e4e4e4"
            />
            <path
              id="b68b3c2d-1cd9-4a2b-b264-66241f72f014-192"
              data-name="Ellipse 3 - Outline"
              d="M351.31474,468.41256a24.91786,24.91786,0,0,0-2.76862.36112,25.34525,25.34525,0,0,0-2.7289.66929,26.35271,26.35271,0,0,0-2.67954.97985,27.95921,27.95921,0,0,0-2.62056,1.288q-1.24828.70179-2.44,1.52635t-2.31481,1.77192q-1.12189.94494-2.17758,2.01508t-2.03433,2.257q-.97865,1.18689-1.855,2.45925t-1.64432,2.62177q-.76077,1.3518-1.42283,2.777t-1.20375,2.91668q-.56455,1.5468-.98828,3.12613t-.7066,3.18511q-.28409,1.60581-.42613,3.23327t-.142,3.26818q0,1.64072.142,3.23929t.42613,3.14781q.28288,1.54922.7066,3.04307t.98467,2.92631q.54649,1.3831,1.20374,2.67594a28.57511,28.57511,0,0,0,1.42525,2.48935,27.29148,27.29148,0,0,0,1.64432,2.28712,26.5101,26.5101,0,0,0,1.85618,2.09092,25.40871,25.40871,0,0,0,2.03433,1.849,24.07734,24.07734,0,0,0,2.17879,1.58052,23.19194,23.19194,0,0,0,4.7548,2.34008,22.74339,22.74339,0,0,0,5.2965,1.20375,23.28723,23.28723,0,0,0,2.7289.12038,24.48957,24.48957,0,0,0,2.76862-.19621,25.37075,25.37075,0,0,0,2.75417-.50678,25.86665,25.86665,0,0,0,2.69038-.80772,26.945,26.945,0,0,0,2.61815-1.10384,28.59661,28.59661,0,0,0,2.53751-1.39394q1.20014-.74872,2.33767-1.60579t2.20407-1.8273q1.06651-.97021,2.05961-2.04637t1.90915-2.25823q.92206-1.18087,1.7358-2.43278t1.524-2.57q.71021-1.31811,1.31449-2.6976t1.10143-2.81677q.5152-1.48784.90161-3.00095t.64521-3.04789q.2576-1.536.38761-3.08761t.13-3.11651q-.0012-1.56488-.13-3.09123t-.38761-3.00937q-.25761-1.4806-.64521-2.91788t-.90161-2.82039q-.49955-1.33857-1.10143-2.59648-.61029-1.25431-1.32051-2.434a27.302,27.302,0,0,0-3.25373-4.34915,25.78887,25.78887,0,0,0-1.90433-1.87664,24.39517,24.39517,0,0,0-2.05962-1.63349,23.56323,23.56323,0,0,0-2.20406-1.38551,23.29152,23.29152,0,0,0-2.34249-1.13152,22.72083,22.72083,0,0,0-5.15445-1.46256,23.06838,23.06838,0,0,0-2.69038-.26843,24.143,24.143,0,0,0-2.75418.04574"
              transform="translate(-320.41275 -158.75)"
              fill="#e4e4e4"
            />
            <path
              id="a5644fa4-417a-45bc-a470-f5aa82f96b47-193"
              data-name="Ellipse 2 - Outline"
              d="M351.31956,232.68006a24.34593,24.34593,0,0,0-2.76862.09029,23.98521,23.98521,0,0,0-2.7289.40446,24.23785,24.23785,0,0,0-2.67954.72224,25.11021,25.11021,0,0,0-2.62056,1.034,26.09237,26.09237,0,0,0-2.44,1.2844,26.78288,26.78288,0,0,0-2.31481,1.548,27.97275,27.97275,0,0,0-2.17879,1.80562q-1.0605.97383-2.03794,2.06443-.97865,1.0918-1.855,2.2799t-1.64432,2.46287q-.76439,1.29162-1.42644,2.647t-1.20375,2.79992q-.56094,1.489-.98467,3.02743t-.7066,3.1165q-.28409,1.58293-.42613,3.19235t-.142,3.25012q0,1.6383.142,3.25012t.42613,3.18873q.28288,1.57691.7066,3.11169t.98467,3.0214q.54649,1.43607,1.20375,2.7927.66207,1.3518,1.43,2.623t1.64432,2.452q.87513,1.18449,1.855,2.26786t2.03433,2.04638a27.71027,27.71027,0,0,0,2.16795,1.79839,26.54319,26.54319,0,0,0,2.31481,1.53237,25.88047,25.88047,0,0,0,2.44,1.26875,24.94157,24.94157,0,0,0,2.62056,1.01717,23.982,23.982,0,0,0,5.40844,1.08338,24.49013,24.49013,0,0,0,5.5216-.16732,24.15436,24.15436,0,0,0,2.69038-.5465,24.50223,24.50223,0,0,0,2.61815-.84985,25.45616,25.45616,0,0,0,2.5375-1.14717,26.49778,26.49778,0,0,0,2.34249-1.37348,27.22077,27.22077,0,0,0,2.20407-1.61422q1.06651-.86671,2.05961-1.84655t1.90915-2.07286q.92206-1.093,1.7358-2.26545t1.524-2.42195q.71262-1.24948,1.31449-2.57t1.10143-2.70482q.5152-1.43727.90161-2.91307t.64521-2.9853q.2576-1.51551.38761-3.05511t.13-3.10447q-.0012-1.56368-.13-3.10326t-.38761-3.04669q-.25761-1.5083-.64521-2.98289t-.90161-2.90826q-.49955-1.38551-1.10143-2.70241t-1.32051-2.56519q-.71021-1.23746-1.524-2.4075t-1.72978-2.25341q-.91-1.08218-1.90433-2.05721t-2.05962-1.83331a26.96321,26.96321,0,0,0-2.20286-1.60339,26.27265,26.27265,0,0,0-2.34249-1.359,25.2716,25.2716,0,0,0-2.5375-1.13152,24.36276,24.36276,0,0,0-2.61815-.833,24.05963,24.05963,0,0,0-2.69038-.52965,24.36862,24.36862,0,0,0-2.75418-.22149m0-3.01178a26.74741,26.74741,0,0,1,11.59932,3.00215,30.44173,30.44173,0,0,1,9.30257,7.515,35.43128,35.43128,0,0,1,6.18727,10.86383,39.62389,39.62389,0,0,1,0,26.33682,35.72622,35.72622,0,0,1-6.18727,10.90355,30.72788,30.72788,0,0,1-9.30377,7.57037,26.87245,26.87245,0,0,1-11.59932,3.078,26.5187,26.5187,0,0,1-11.83526-2.35935,29.92525,29.92525,0,0,1-9.84546-7.2598,35.05187,35.05187,0,0,1-6.73136-11.11542,39.58533,39.58533,0,0,1,0-27.62242,35.35065,35.35065,0,0,1,6.73136-11.15875,30.20092,30.20092,0,0,1,9.84546-7.3236,26.61731,26.61731,0,0,1,11.84248-2.43519Z"
              transform="translate(-320.41275 -158.75)"
              fill="#6c63ff"
            />
            <path
              id="aeea3032-7d6f-43a2-9023-7da5e46a69d9-194"
              data-name="Path 1"
              d="M351.31716,272.82388l-9.48192-19.75352,2.251-1.46616,7.80992,16.22773,32.79251-38.544,1.985,2.115Z"
              transform="translate(-320.41275 -158.75)"
              fill="#6c63ff"
            />
            <g id="b65364ff-7d92-487e-8061-939b37583c0d" data-name="Group 1">
              <path
                id="efb13e16-1633-4e88-9f48-a8cd4f1f0a11-195"
                data-name="Path 1-2"
                d="M696.403,662.81072l-23.4731-.09149,7.56917,61.3346,15.90393.07945Z"
                transform="translate(-320.41275 -158.75)"
                fill="#9e616a"
              />
              <path
                id="b5b13dc0-906f-47cb-af24-0252d232cfd5-196"
                data-name="Path 2"
                d="M700.45839,739.56654l-51.2532-.27084v-.64762a20.102,20.102,0,0,1,.38279-3.9182,19.5981,19.5981,0,0,1,2.9552-7.12017,20.12424,20.12424,0,0,1,5.54326-5.51558,19.60926,19.60926,0,0,1,7.13462-2.92391,20.10992,20.10992,0,0,1,3.92061-.36112h0l31.31672.15408Z"
                transform="translate(-320.41275 -158.75)"
                fill="#2f2e41"
              />
            </g>
            <g id="b7f9c824-5877-4162-b4d5-ccd00fd098dd" data-name="Group 2">
              <path
                id="a1d436e5-b88b-4a37-a10d-47f639496f81-197"
                data-name="Path 3"
                d="M621.24452,662.51941l-23.40569-.09149,7.5451,61.25154,15.86059.07945Z"
                transform="translate(-320.41275 -158.75)"
                fill="#9e616a"
              />
              <path
                id="aa34d611-dd92-4168-ad92-5f109db8b699-198"
                data-name="Path 4"
                d="M625.28911,739.16809l-51.11839-.26843V738.252a20.12047,20.12047,0,0,1,.3828-3.91218,19.59207,19.59207,0,0,1,2.94677-7.11054,20.06641,20.06641,0,0,1,5.53-5.51076,19.53926,19.53926,0,0,1,7.11656-2.91669,20.03214,20.03214,0,0,1,3.911-.36112h0l31.23125.15287Z"
                transform="translate(-320.41275 -158.75)"
                fill="#2f2e41"
              />
            </g>
            <path
              id="a2716e79-bed1-4374-9a2b-fced6059ca2b-199"
              data-name="Path 6"
              d="M620.25022,411.82915l-39.359,146.8838,14.40647,140.79886,31.89933.87994-6.94562-127.13389,39.79472-63.44478L668.677,701.25724l28.9357-2.04637,16.09653-164.603a186.93043,186.93043,0,0,0,11.95322-40.02344,178.21728,178.21728,0,0,0,2.82761-32.69983,152.92963,152.92963,0,0,0-1.69729-22.04906,80.71222,80.71222,0,0,0-1.59015-8.08437l-11.73534-11.89665Z"
              transform="translate(-320.41275 -158.75)"
              fill="#2f2e41"
            />
            <path
              d="M672.39794,436.39551c-6.61914,0-12.82983-.2124-18.46167-.63184A138.618,138.618,0,0,1,636.802,433.5083a61.01273,61.01273,0,0,1-13.97509-4.3999,22.42492,22.42492,0,0,1-9.06446-7.15381l-.26831-.39014,10.75806-70.01318,11.60107-78.72168a21.455,21.455,0,0,1,21.89038-18.333l36.333,1.11328a20.36358,20.36358,0,0,1,19.70166,21.5918l-4.76953,78.28955,17.593,77.22412-1.24585.17383c-.50122.06641-2.43213.32129-5.45654.66162-3.95313.44434-7.98975.84473-11.99732,1.19043-5.66992.48877-11.21826.873-16.49072,1.14258C684.72484,436.22461,678.31615,436.38965,672.39794,436.39551Z"
              transform="translate(-320.41275 -158.75)"
              fill="#ccc"
            />
            <path
              id="ad5d6a80-02ce-46d1-bab9-e92b7dd0c553-200"
              data-name="Path 9"
              d="M652.23623,240.58509q-.01447.00006-.029,0a5.80447,5.80447,0,0,1-5.80081-5.80814V202.38413a43.28932,43.28932,0,0,1,3.415-16.89461,43.98743,43.98743,0,0,1,23.112-23.23235,43.31447,43.31447,0,0,1,60.38845,39.73935v32.44223a5.81392,5.81392,0,0,1-.45983,2.27268,5.90921,5.90921,0,0,1-3.11289,3.12011,5.83343,5.83343,0,0,1-2.27388.46826l-75.24391.28529Z"
              transform="translate(-320.41275 -158.75)"
              fill="#2f2e41"
            />
            <path
              id="b726e025-86c8-4394-a2c8-021cc2286f1b-201"
              data-name="Ellipse 1"
              d="M709.48651,191.27474A31.93063,31.93063,0,0,1,672.56393,237.27a31.55868,31.55868,0,0,1-18.98311-15.20816,31.93063,31.93063,0,0,1,36.8973-45.9832,31.55869,31.55869,0,0,1,19.00839,15.19733Z"
              transform="translate(-320.41275 -158.75)"
              fill="#9e616a"
            />
            <path
              id="f57fd208-21ef-4a3c-a796-e350b3c4ef74-202"
              data-name="Path 10"
              d="M636.13248,205.02034a34.24421,34.24421,0,0,1,2.70121-13.36161,34.7739,34.7739,0,0,1,18.27651-18.3692,34.26006,34.26006,0,0,1,13.36162-2.76863l6.48339-.0325q.10922-.00063.21845-.00056a34.18646,34.18646,0,0,1,34.16542,34.20749v.64882l-13.71551.05537L692.947,192.334l-.93532,13.09077-7.08406.03129-2.35814-6.59172-.47307,6.60015-45.95792.20584Z"
              transform="translate(-320.41275 -158.75)"
              fill="#2f2e41"
            />
            <path
              id="a4aedf3a-b803-468c-96e6-3db664c8a6b9-203"
              data-name="Path 11"
              d="M580.91626,273.16471a15.04676,15.04676,0,0,0-5.785,2.8352,14.64818,14.64818,0,0,0-3.35954,3.7668,15.28752,15.28752,0,0,0-2.20959,9.53709,14.63534,14.63534,0,0,0,1.35071,4.85691,14.88942,14.88942,0,0,0,21.38117,6.27077q.19721-.12731.3906-.25841t.37992-.26751q.18767-.1368.36885-.27777t.3597-.28611l75.68285,26.936A11.40553,11.40553,0,0,0,682.557,322.192l17.9425-24.84286-21.69279-14.60789-11.384,12.93211-69.26236-13.778q-.1134-.2692-.23482-.5357t-.25347-.5307q-.13434-.26343-.27667-.52416t-.301-.51725A14.87713,14.87713,0,0,0,580.91626,273.16471Z"
              transform="translate(-320.41275 -158.75)"
              fill="#9e616a"
            />
            <path
              id="f92404ba-5ab9-4b2c-8e33-361dae08dca6-204"
              data-name="Path 12"
              d="M668.64413,287.51774c2.264-2.82544,5.42926-6.49388,8.64528-10.13238s6.4797-7.24478,8.94157-9.94249,4.1185-4.48569,4.1185-4.48569a17.83449,17.83449,0,0,1,32.39864,13.15647,17.57477,17.57477,0,0,1-2.65988,6.51856s-2.46915,3.231-6.19616,8.05366-8.71376,11.24257-13.74364,17.62495-10.10894,12.73178-14.02513,17.41865-6.67216,7.71467-7.06039,7.45538L665.40274,292.5796C665.01451,292.3203,666.38017,290.34318,668.64413,287.51774Z"
              transform="translate(-320.41275 -158.75)"
              fill="#ccc"
            />
            <path
              id="ed7e3964-87ca-4ccc-8578-c3f29353ddd2-205"
              data-name="Path 13"
              d="M676.75177,239.56431a5.71188,5.71188,0,0,0,.24075,3.13576,5.84194,5.84194,0,0,0,.76558,1.43848,5.90867,5.90867,0,0,0,.94856,1.01957,5.79475,5.79475,0,0,0,3.76532,1.36867q.12881-.00122.25761-.00723t.2576-.01805q.13-.01083.2588-.02889t.25881-.04093l4.868-.88475,6.70488-14.32461v13.12086l22.13212-3.98441V184.67939l-37.10314.17816.91725,1.06532a25.51935,25.51935,0,0,1,5.778,12.5575,41.59937,41.59937,0,0,1-.26723,14.15006,75.01637,75.01637,0,0,1-3.95071,13.819,110.55836,110.55836,0,0,1-5.27723,11.58367A5.83362,5.83362,0,0,0,676.75177,239.56431Z"
              transform="translate(-320.41275 -158.75)"
              fill="#2f2e41"
            />
            <path
              d="M419.7553,741.25H878.3835a1.20375,1.20375,0,0,0,0-2.4075H419.7553a1.20375,1.20375,0,1,0,0,2.4075Z"
              transform="translate(-320.41275 -158.75)"
              fill="#cacaca"
            />
          </svg>
        </div>
        <div className="flex flex-col mt-2.5 w-full border-l pl-5 border-gray-100 dark:border-neutral-700">
          <div className="relative grid gap-1 p-1 grid-cols-1">
            {List.map(({ name, value, logo }) => (
              <div
                className="cursor-pointer focus:outline-none flex items-center rounded-lg p-2 transition duration-150 ease-in-out text-neutral-700 hover:bg-neutral-100 dark:text-neutral-100 dark:hover:bg-neutral-700"
                onClick={onClickAuth(value)}
                key={value}
              >
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full px-1 py-1 focus:outline-none bg-neutral-200 text-neutral-700 dark:text-neutral-200 dark:fill-neutral-200 dark:bg-neutral-700">
                  <logo.src className={classNames(
                      logo.fill,
                      "w-6 h-6"
                    )}
                  />
                  {/* <Image
                    src={logo.src}
                    alt={name}
                    className={classNames(
                      logo.fill,
                      "w-16 h-16"
                    )}
                    width="24"
                    height="24"
                  /> */}
                  {/* <svg>
                    <use
                      href={logo.src}
                      className={classNames(
                      logo.fill,
                      "w-16 h-16"
                    )}
                    ></use>
                  </svg> */}
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium">{name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};
