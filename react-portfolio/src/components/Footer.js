import React from 'react';
import * as Icon from 'react-bootstrap-icons';

export default function Footer() {
    return (
    <div className="footer rounded-circle">
        <p className="footer_title">Ygor</p>
        <a className='m-2' href='https://linkedin.com/in/ygor-carmo-bb1bb9125' target="_blank">
            <Icon.Linkedin style={{ width: '30px', height:'30px'}}  />
        </a>                        
        <a className='m-2' href='https://github.com/ygorcarmo' target="_blank">
            <Icon.Github style={{ width: '30px', height:'30px'}} />
        </a>                                              
        <a className='m-2' href='https://www.credly.com/users/ygor-olveira-do-carmo' target="_blank">
            <Icon.PatchCheckFill style={{ width: '30px', height:'30px'}} />
        </a>                        
        <a className='m-2' href='https://drive.google.com/file/d/1CitDK-8E_ulrNT1PjyPvhIODpPC0jxp8/view?usp=sharing' target="_blank">
            <Icon.FilePdf style={{ width: '30px', height:'30px'}} />
        </a> 
        <p className='mt-2' >&#169; 2022 copyright all right reserved</p>
    </div>
    );
  }
