import { Box, Text, TextInput, Select, FileInput } from '@mantine/core';
import { IconUpload } from '@tabler/icons';
import { DatePicker } from '@mantine/dates';
const First =()=>{
    const boxStyle = {
        width: '70%',
        margin: '1rem auto',
        
        padding: '1rem 0',
      };
return(
   <>
    <Box
    sx={boxStyle}
  >
    <Text>To start with, whats your beautiful name?</Text>
    <Box
      sx={{
        margin: '1rem 0',
      }}
    >
      <div className='row'>
        <div className='col-md-6'>
            <label htmlFor="intitule">Intitulé de la manifestation <span className='obg'>*</span></label>
        <TextInput
        placeholder="John Doe"
        required
      />
        </div>
        <div className='col-md-6'>
        <label htmlFor="type">Type(Workshop...)<span className='obg'>*</span></label>


        <TextInput
        placeholder="John Doe"
        required
      />
        </div>
        </div>
        <div className='row'>
        <div className='col-md-6'>
            <label htmlFor="lieu">Lieu<span className='obg'>*</span></label>
        <TextInput
        placeholder="John Doe"
        required
      />
        </div>
        <div className='col-md-6'>
        <label htmlFor="etendue">Etendue(Locale,Régionale...) <span className='obg'>*</span></label>
        <TextInput
        placeholder="John Doe"
        required
      />
        </div>
        </div>

        <div className='row'>
        <div className='col-md-6'>
            <label htmlFor="siteWeb">Site Web de la manifestation<span className='obg'>*</span></label>
        <TextInput
        placeholder="John Doe"
        required
      />
        </div>
        <div className='col-md-6'>
        <label htmlFor="agenceOrganisatrice">Agence organisatrice <span className='obg'>*</span></label>
        <TextInput
        placeholder="John Doe"
        required
      />
        </div>
        </div>

        <div className='row'>
            <label htmlFor='partenaireImplique'> Partenaire(s) impliqué(s)</label>
        <TextInput
        placeholder="John Doe"
        required
      />
        </div>

        <div className='row'>
            <label htmlFor='etablissementImplique'> Etablissement(s) de l’UCAM impliqué(s) dans l’organisation</label>
            <Select  data={[]} />
        </div>

        <div className='row'>
        <div className='col-md-6'>
        <TextInput
        label="Nombre etudiants locaux"
        placeholder="John Doe"
        required
      />
        </div>
        <div className='col-md-6'>
        <FileInput label="Liste des etudiants locaux *" placeholder="Upload files" accept=".pdf" icon={<IconUpload size={14} />} />
        </div>
        </div>

        <div className='row'>
        <div className='col-md-6'>
        <TextInput
        label="Nombre etudiants locaux"
        placeholder="John Doe"
        required
      />
        </div>
        <div className='col-md-6'>
        <FileInput label="Liste des étudiants locaux" placeholder="choisir un fichier" icon={<IconUpload size={14} />} />
        </div>
        </div>

        <div className='row'>
        <div className='col-md-6'>
        <DatePicker placeholder="Pick date" label="Du" withAsterisk dropdownType="modal" />
        </div>
        <div className='col-md-6'>
        <DatePicker placeholder="Pick date" label="Au" withAsterisk dropdownType="modal"/>        </div>
        </div>
    </Box>
  </Box>
   </>

  


);
}

export default First;