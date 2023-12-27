import { useEffect, useRef } from "react";
import "./modal.scss"
import { createPortal } from "react-dom"

interface ModalProps {
    setIsOpen: Function,
    children: React.ReactNode
}

export default function Modal({ setIsOpen, children }: ModalProps) {
    const modalElement: HTMLElement | null = document.getElementById('modal');

    if (!modalElement) {
        return null;
    }

    const handleSubmit = () => {
        setIsOpen(false)
    }

    return (
        createPortal(
            <div className="modal-container" >
                <div className="centered">
                    <div className="modal">
                        {children}
                    </div>
                </div>
            </div>,
            modalElement
        )
    )

}