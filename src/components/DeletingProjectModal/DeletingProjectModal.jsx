import React from 'react';
import MyButton from "../MyButton/MyButton";

const DeletingProjectModal = () => {

    const [isOpenModal, setIsModalOpen] = React.useState(false)

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    const handleDeleteProject = () => {

    }
         return (
             <div className="delete-project-modal">
                 <div className="delete-project__content">
                     <div className="delete-project__header">
                         <h2>Вы уверены что хотите удалить проект?</h2>
                         <p>после удаления проекта, вы не сможете удалить его</p>
                         <div className="delete-form__buttons">
                             <MyButton onClick={handleCloseModal}>Отменить</MyButton>
                             <MyButton onClick={handleCreateProject}>Удалить проект</MyButton>
                         </div>
                     </div>
                 </div>
             </div>
        );
    }

export default DeletingProjectModal;