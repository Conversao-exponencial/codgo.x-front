import React, { useCallback, useState } from 'react';
import { EditOccurrenceModal } from '.';




interface EditButtonCellProps {
  occurenceId: string;
}

export const EditButtonCell = React.memo(({ occurenceId }: EditButtonCellProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false);

  console.log('Rendering EditButtonCell for:', occurenceId);

  return (
    <>
      <button onClick={openModal}>Edit</button>
      {isOpen && <EditOccurrenceModal occurenceId={occurenceId} isOpen={isOpen} onClose={closeModal} />}
    </>
  );
});
