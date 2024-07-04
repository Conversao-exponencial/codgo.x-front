import { AlertDialog, AlertDialogHeader, AlertDialogFooter, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogCancel } from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import client from '@/server/client';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

interface EditOccurrenceModalProps {
    occurenceId: number;
    isOpen: boolean;
    onClose: () => void;
}


export const EditOccurrenceModal = React.memo(({ occurenceId, isOpen, onClose }: EditOccurrenceModalProps) => {

    const [canEdit, setCanEdit] = useState(false);
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.get('/data');
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

    const { register, handleSubmit } = useForm({
        defaultValues: {
            numero: data.numero,
            ocorreuEm: data.ocorreuEm, //complementar de acordo com retorno do back
            horario: "",
            lancamento: "",
            documento: "",
            tipo: "",
            pedido: "",
            localização: "",
            responsavelSolucao: "",
            transportadora: "",
            interessado: "",
            responsavel_interessado: "",
            tomadorServico: "",
            contato: "",
            rg_cpf: "",
            responsavel: "",
            deparatamento: "",
            usuario_responsavel: "",
            cidade: "",
            estado: "",
            observacoes: ""
        }
    });


    const onSubmit = (data) => {
        console.log(data)
    };

    

    useEffect(()=>{
        if(occurenceId && isOpen){
            console.log("api call do get de acordo com id")
        }
    },[isOpen, occurenceId])



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
                            <Input id="Horario" label="Horário" {...register('horario')} disabled={!canEdit} />
                            <Input id="Lançamento" label="Lançamento" {...register('lancamento')} disabled={!canEdit} />
                        </div>
                        <div className='flex w-full w-full gap-4'>
                            <Input id="Documento" label="N° Documento" {...register('documento')} disabled={!canEdit} />
                            <Input id="Tipo" label="Tipo" {...register('tipo')} disabled={!canEdit} />
                            <Input id="Pedido" label="Pedido" {...register('pedido')} disabled={!canEdit} />
                            <Input id="Localização" label="Localização" {...register('localização')} disabled={!canEdit} />
                        </div>
                        <div className='flex w-full w-full gap-4'>
                            <Input id="Responsavel_Solucao" label="Responsável pela Soluçao" {...register('responsavelSolucao')} disabled={!canEdit} />
                            <Input id="Transportadora" label="Transportadora" {...register('transportadora')} disabled={!canEdit} />
                        </div>
                        <div className='flex w-full w-full gap-4'>
                            <Input id="Interessado" label="interessado" {...register('interessado')} disabled={!canEdit} />
                            <Input id="Responsável_Interessado" label="Responsável pelo Interessado" {...register('responsavel_interessado')} disabled={!canEdit} />
                        </div>
                        <div className='flex w-full w-full gap-4'>
                            <Input id="origem" label="Origem da Informação" {...register('tomadorServico')} disabled={!canEdit} />
                            <Input id="contato" label="Contato" {...register('contato')} disabled={!canEdit} />
                            <Input id="Rg_Cpf" label="RG / CPF" {...register('rg_cpf')} disabled={!canEdit} />
                        </div>
                        <div className='flex w-full w-full gap-4'>
                        <Input id="Responsavel" label="Responsável" {...register('responsavel')} disabled={!canEdit} />
                            <Input id="Deparatamento_Padrao" label="Deparatamento Padrão" {...register('deparatamento')} disabled={!canEdit} />
                            <Input id="Usuario_Responsavel" label="Usuário Responsável" {...register('usuario_responsavel')} disabled={!canEdit} />
                        </div>
                        <div className='flex w-full w-full gap-4'>
                            <Input id="Cidade_Destinno" label="Cidade de Destino" {...register('cidade')} disabled={!canEdit} />
                            <Input id="Estado_Destino" label="Estado Destino" {...register('estado')} disabled={!canEdit} />
                        </div>
                        <label htmlFor="observacoes">Observações</label>
                        <textarea id="observaçoes" {...register('estado')} disabled={!canEdit} />
                    </div>
                    {canEdit && <Button className='w-full' variant={"default"}>Salvar</Button> }
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
  