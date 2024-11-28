import React, { useState, useEffect } from "react";
import "./index.css";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isOpen) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={openModal}>
        Уведомления
      </button>

      {isOpen && (
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Заказ 18020642-0063 доставлен</h5>  <hr/>
             
            </div>
            <div className="modal-body">
              <p>
                Заберите его в пункте выдачи до 15 апреля включительно, потом
                заказ придется отменить.
                <br />
                Вход в пункт выдачи только в маске и перчатках.
              </p> <hr/>
              
            </div>
            
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={closeModal}>
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
