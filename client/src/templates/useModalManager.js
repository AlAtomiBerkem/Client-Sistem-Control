import React from 'react'

export const useModalManager = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [data, setData] = React.useState(null)

    const openModal = (modalData = null) => {
        setIsOpen(true);
        setData(modalData);
    }

    const closeModal = () => {
        setIsOpen(false);
        setData(null);
    }

    return {
        isOpen,
        data,
        openModal,
        closeModal,
    }

}

export default useModalManager;