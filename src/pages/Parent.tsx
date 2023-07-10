
import { useState } from 'react';
import Child from './Child';
// import { GetServerSideProps } from 'next';
import Cookies from 'js-cookie';
// import Cookies from 'cookie';


/** export const getServerSideProps: GetServerSideProps = async (context) => {
     const res = await Cookies.get('myCookie');
    const myData = await res?.json()
    return {
          props: {
                myData,
              },
            }; 
} **/

    /**  export const getServerSideProps: GetServerSideProps = async (context) => {
        const cookie = context.req.headers.cookie;
        console.log(cookie, 'server');
        let value = null;
            if (cookie) {
        const cookieArray = cookie.split(';');
        const desiredCookie = cookieArray.find(c => c.trim().startsWith('myCookie='));
            if (desiredCookie) {
        value = desiredCookie.split('=')[1];
    }
  } 

        return {
             props: {
                 myData: value || null
            }
        };
    }; **/


// export function parseCookies (req) {
//     return Cookies.parse(req ? req.headers.cookie || '' : document.cookie)
// }

export default function Parent({ myData }) {
  const [color, setColor] = useState(myData ? [myData] : [255, 255, 255]);
  const handleChange: React.MouseEventHandler<HTMLInputElement> = (value) => {
      setColor(value);
      Cookies.set('myCookie', `rgb(${value})`);
    console.log(color);
  };
  return (
    <div
      style={{
        backgroundColor: `rgb(${color})`,
        width: '1000px',
        height: '1000px',
      }}
    >
      <Child onClick={handleChange} />
    </div>
  );
}

