import React from 'react';
import { useForm } from 'react-hook-form';
import { useSignupStore } from '../../state/useSignupStore';

type AvatarFormData = {
  avatar: FileList;
};

const Step6Avatar: React.FC = () => {
  const storeAvatar = useSignupStore(state => state.avatar);
  const setAvatar = useSignupStore(state => state.setAvatar);
  const nextStep = useSignupStore(state => state.nextStep);
  const prevStep = useSignupStore(state => state.prevStep);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors
  } = useForm<AvatarFormData>({
    mode: 'onChange'
  });

  const onSubmit = () => {
    // If a new file was selected, it's already saved in state
    // If no new file was selected but we have one in state, proceed
    nextStep();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    // Validate file size
    if (file.size > 1024 * 1024) {
      setError('avatar', {
        type: 'validate',
        message: 'File size must be at most 1MB'
      });
      e.target.value = ''; // reset file input
      return;
    }
    // Validate image dimensions
    const reader = new FileReader();
    reader.onload = event => {
      const img = new Image();
      img.onload = () => {
        if (img.width > 600 || img.height > 600) {
          setError('avatar', {
            type: 'validate',
            message: 'Image dimensions must be at most 600x600px'
          });
          e.target.value = '';
        } else {
          // Clear any previous error and store avatar (data URL)
          clearErrors('avatar');
          if (event.target?.result && typeof event.target.result === 'string') {
            setAvatar(event.target.result);
          }
        }
      };
      if (typeof event.target?.result === 'string') {
        img.src = event.target.result;
      }
    };
    reader.readAsDataURL(file);
  };

  // Register file input with conditional required (only if no avatar already in store)
  const {
    ref: fileInputRef,
    onChange: fileRegisterOnChange,
    ...fileField
  } = register('avatar', {
    required: storeAvatar ? false : 'Avatar is required'
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-lg font-semibold mb-4">Upload Avatar</h2>
      {storeAvatar && (
        <img
          src={storeAvatar}
          alt="Avatar preview"
          className="w-24 h-24 object-cover rounded-full mb-4"
        />
      )}
      <div className="mb-4">
        <label className="block font-medium mb-1">Avatar</label>
        <input
          type="file"
          accept="image/*"
          className="block w-full text-sm text-gray-700
                     file:mr-4 file:py-2 file:px-4 file:rounded file:border-0
                     file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700
                     hover:file:bg-blue-100"
          onChange={e => {
            fileRegisterOnChange(e);
            handleFileChange(e);
          }}
          ref={fileInputRef}
          {...fileField}
        />
        <p className="text-sm text-gray-500">Max 600x600px, 1MB.</p>
        <p className="text-red-500 text-sm mt-1 h-[24px]">
          {errors.avatar
            ? errors.avatar.message
            : ''
          }
        </p>
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded"
        >
          Back
        </button>
        <button type="submit" className="bg-gray-200 text-gray-700 px-4 py-2 rounded">
          Next
        </button>
      </div>
    </form>
  );
};

export default Step6Avatar;
