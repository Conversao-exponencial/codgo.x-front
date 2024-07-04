import { AlertDialog, AlertDialogHeader, AlertDialogFooter, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogCancel } from '@/components/ui/alert-dialog'
import { Input } from '@/components/ui/input';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';


export const EditOccurrenceModal = React.memo(({ occurenceId, isOpen, onClose }) => {

    const [canEdit, setCanEdit] = useState(false);
    console.log("modal", occurenceId, isOpen)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    //Faxer um get  e um put

    useEffect(()=>{
        if(occurenceId && isOpen){
            console.log("api call")
        }
    },[isOpen, occurenceId])
  
    return (
      <AlertDialog open={isOpen} onOpenChange={onClose}>
        <AlertDialogContent >
          <AlertDialogHeader>
            <AlertDialogTitle>Ocorrência {occurenceId}</AlertDialogTitle>
            <AlertDialogDescription>
            </AlertDialogDescription>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input  {...register('numero')} disabled={!canEdit} />
                    <Input id="Ocorreu" label="Ocorreu em" {...register('ocorreuEm')} disabled={!canEdit} />
                    <Input id="Horario" label="Horário" {...register('horario')} disabled={!canEdit} />
                    <Input id="Lançamento" label="Lançamento" {...register('lancamento')} disabled={!canEdit} />
                    <Input id="Documento" label="Documento" {...register('documento')} disabled={!canEdit} />
                    <Input id="Pedido" label="Pedido" {...register('pedido')} disabled={!canEdit} />
                    <Input id="Solução" label="Solução" {...register('solucao')} disabled={!canEdit} />
                    <Input id="Transportadora" label="Transportadora" {...register('transportadora')} disabled={!canEdit} />
                    <Input id="Tomador" label="Tomador do Serviço" {...register('tomadorServico')} disabled={!canEdit} />
                    <Input id="Cidade" label="Cidade de Destino" {...register('cidadeDestino')} disabled={!canEdit} />
                    <Input id="Estado" label="Estado Destino" {...register('estadoDestino')} disabled={!canEdit} />
                    <Input id="Observações" label="Observações" {...register('observacoes')} disabled={!canEdit} />
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
  