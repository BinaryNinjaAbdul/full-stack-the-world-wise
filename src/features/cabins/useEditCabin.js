import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { createEditFunction } from '../../services/apiCabins';

export function useEditCabin() {
  const queryClient = useQueryClient();

  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditFunction(newCabinData, id),
    onSuccess: () => {
      toast.success('Cabin successfully edited.');
      queryClient.invalidateQueries({ queryKeu: ['cabin'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editCabin };
}