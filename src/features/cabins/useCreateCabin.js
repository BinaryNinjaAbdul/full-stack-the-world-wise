import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { createEditFunction } from '../../services/apiCabins';

export function useCreateCabin() {
  const queryClient = useQueryClient();

  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: createEditFunction,
    onSuccess: () => {
      toast.success('New cabin successfully create.');
      queryClient.invalidateQueries({ queryKeu: ['cabin'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createCabin };
}
