import React, {useEffect} from "react";
function EE(){
      useEffect(()=>{
        let js_logo = `%c

                             JJSSSSSSSSSSSSSSSS
            JJJJJJ          SSSSSSSSSSSSSSSSSSSS
        JJSSSSSSSSJJ      JJSSSSSSSSSSSSSSSSSSJJ
        JJSSSSSSSSJJ      SSSSSSSSSSSSSSSSSSSSJJ
          SSSSSSSSSSJJ    SSSS        JJJJJJSS
          JJSSSSSSSSJJ    SSSS
            JJSSSSSSSSJJ  SSSSJ
              SSSSSSSSJJ  JJSSJJ
              JJSSSSSSSSJJ JJSSSSJ
                JJSSSSSSJJ  JJSSJJ
                JJSSSSSSSS  JJSSSS
                  JJSSSSSSJJ  JJSSJJ
                    JJSSSSSS  JJSSSSJJ
                    JJSSSSSSJJ  JJSSJJ
                      JJSSSSSS  JJSSSSJJ
                        SSSSSSJJ  JJSSJJ
                        JJSSSSJJ  JJSSSS
                          JJSSSS    SSSSJJ
JJJJJJJJJJJJJJ            JJSSSSJJ  SSSSJJ
SSSSSSSSSSSSSSSSJJJJ        JJSSJJ  SSSSJJ
SSSSJJJJJJJJSSSSSSSSSSSSJJJJJJSSSSJJSSSS
SSSSJJ      JJJJJJSSSSSSSSSSSSSSSSSSSSJJ
JJSSSS              JJJJJJJJJJSSSSJJ
  JJSSSSJJ                    JJSSJJ
    JJSSSSJJ                  JJSSJJ
      JJSSSSJJ                JJSSJJ
        JJSSSSSSJJ            JJSSJJ
          JJSSSSSSJJJJ      JJSSSSJJ
              JJSSSSSSSSSSSSSSSSSS
                  JJSSSSSSSSSSJJJJ

        `
    var url="https://joseph-san.com/";

        let legend = `%c
    \t|                                                  |\t
    \t|--------------------------------------------------|\t
    \t|                                                  |\t
    \t| Front-end Development & Web Design by JoSePh SaN |\t
    \t|                                                  |\t
    \t|--------------------------------------------------|\t
    \t|                                                  |\t\n
\t\t\t Visit portfolio ->>> ${url} \t\n
    \t|--------------------------------------------------|\t
    \t|                                                  |\t\n\n`

        console.log(js_logo + legend, "color:red", "color: white;font-size: 12px;");

  },[])
}
export default EE;