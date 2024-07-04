import { AlertDialog, AlertDialogHeader, AlertDialogFooter, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogCancel } from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

interface EditOccurrenceModalProps {
    occurenceId: number;
    isOpen: boolean;
    onClose: () => void;
}


export const EditOccurrenceModal = React.memo(({ occurenceId, isOpen, onClose }: EditOccurrenceModalProps) => {

    const [canEdit, setCanEdit] = useState(false);
    console.log("modal", occurenceId, isOpen)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    

    useEffect(()=>{
        if(occurenceId && isOpen){
            console.log("api call do get de acordo com id")
        }
    },[isOpen, occurenceId])

    const handleSaveEdit = (data) =>{
        console.log(data)
    }


  
    return (
      <AlertDialog open={isOpen} onOpenChange={onClose}>
        <AlertDialogContent className='w-full max-w-4xl'>
          <AlertDialogHeader>
            <AlertDialogTitle>Ocorrência {occurenceId}</AlertDialogTitle>
            <AlertDialogDescription>
            </AlertDialogDescription>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-2 pb-6">
                        <div className='flex w-full w-full gap-4'>
                            <Input id="numero" label="Número" {...register('numero')} disabled={!canEdit} />
                            <Input id="Ocorreu" label="Ocorreu em" {...register('ocorreuEm')} disabled={!canEdit} />
                        </div>
                        <div className='flex w-full w-full gap-4'>
                            <Input id="Horario" label="Horário" {...register('horario')} disabled={!canEdit} />
                            <Input id="Lançamento" label="Lançamento" {...register('lancamento')} disabled={!canEdit} />
                        </div>
                        <div className='flex w-full w-full gap-4'>
                            <Input id="Documento" label="Documento" {...register('documento')} disabled={!canEdit} />
                            <Input id="Pedido" label="Pedido" {...register('pedido')} disabled={!canEdit} />
                        </div>
                        <div className='flex w-full w-full gap-4'>
                            <Input id="Solução" label="Solução" {...register('solucao')} disabled={!canEdit} />
                            <Input id="Transportadora" label="Transportadora" {...register('transportadora')} disabled={!canEdit} />
                        </div>
                        <div className='flex w-full w-full gap-4'>
                        <Input id="Tomador" label="Tomador do Serviço" {...register('tomadorServico')} disabled={!canEdit} />
                        <Input id="Cidade" label="Cidade de Destino" {...register('cidadeDestino')} disabled={!canEdit} />
                        </div>
                        <div className='flex w-full w-full gap-4'>
                        <Input id="Estado" label="Estado Destino" {...register('estadoDestino')} disabled={!canEdit} />
                        <Input id="Observações" label="Observações" {...register('observacoes')} disabled={!canEdit} />
                        </div>
                    </div>
                    {canEdit && <Button className='w-full' variant={"default"} onClick={handleSaveEdit}>Salvar</Button> }
                </form>
                <button  onClick={()=>{setCanEdit(true)}}>Editar</button>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={()=>{setCanEdit(true)}}>Fechar</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  })
  