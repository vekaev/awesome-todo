import React,{useState,forwardRef,useImperativeHandle} from 'react';
import ReactDOM from 'react-dom';

const modalRoot:any = document.getElementById('modal-root');

type modalProps = {
    ref: MutableRefObject<HTMLInputElement | null>
}

const Modal:React.FC<modalProps> = forwardRef((props,ref) => {
    const [display, setDisplay] = useState(false);

    useImperativeHandle(ref, () => {
        return {
            open: ()=>open(),
            close: () => close()
        }
    })
    
    const open = () => {
        setDisplay(true);
    }
    const close = () => {
        setDisplay(false)
    }
    
    if (display) {
        return ReactDOM.createPortal(
            <div className={`modal-wrapper`}>
                <div onClick={close} className={`modal-backdrop`}></div>
                <div className={`modal-box`}>
                    {props.children}
                </div>
            </div>, modalRoot
        );
    }
        
    return null
        
    });
export default Modal;
