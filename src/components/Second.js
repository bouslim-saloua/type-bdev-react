
import React from 'react';
import { Card, Box, TextInput, Text,  Button, Group, NativeSelect, FileInput, Container,Table, Space , MultiSelect} from '@mantine/core';
import { IconUpload } from '@tabler/icons';
import { DatePicker } from '@mantine/dates';
import { Stepper } from '@mantine/core';
import { useState } from "react";

import "../css/Informations.css";

const  Second=() =>{
//gestion financière
const [list1, setList1] = useState([]);
const [list2, setList2] = useState([]);
const [list3, setList3] = useState([]);
  const [libelle, setLibelle] = useState("");
  const [information, setInformation] = useState("");
  //handle value changing;
  const onChangeLibelle = (e) =>{
const libelle = e.target.value;
setLibelle(libelle);
  }

  //Contributeurs
  const [nomContributeur, setNomContributeur] = useState("");
  const [montantConribution, setMontantContribution] =useState();
  const [natureContribution, setNatureContribution] = useState("");
  const [typeContribution, setTypeContribution] = useState("");
  //handle change pour contributeur fields
  const onChangeNomContributeur =(e) =>{
    const nomContributeur = e.target.value;
    setNomContributeur(nomContributeur);
  }

  const onChangeMontantContribution =(e) =>{
    const montantConribution = e.target.value;
    setMontantContribution(montantConribution);
  }

  const onChangeNatureContribution =(e) =>{
    const natureContribution = e.target.value;
    setNatureContribution(natureContribution);
  }

  const onChangeTypeContribution =(e) =>{
    const typeContribution = e.target.value;
    setTypeContribution(typeContribution);
   // console.log(typeContribution);
  }




  //handle remove item from a table
 /* const handleRemoveItem = index => { // assigning the list to temp variable 
    const newList1= list1.splice(index, 1)
    setList1({ rows: newList1 })
    
  }*/
  const handleRemoveItem = id =>{
    setList1(list1.filter(item => item.id !== id))

  }
  const handleRemoveItem2 = id =>{
    setList1(list2.filter(item => item.id !== id))

  }

  const handleRemoveItem3 = id =>{
    setList1(list3.filter(item => item.id !== id))

  }
  const onChangeInformation = (e)=>{
    const information = e.target.value;
    setInformation(information);
  }

  const handleAddForm1 =()=>{

let newId = list1.length + 1;

const result = {id:newId, libelle: libelle, information: information };
const newList = [...list1, {...result}];


setList1(newList);
setLibelle('');
setInformation('');


//console.log(list1);
  }

  const handleAddForm3 =()=>{

    let newId = list3.length + 1;
    
    const result = {id:newId, nom: nomContParticipant, montant: montantContParticipant };
    const newList = [...list3, {...result}];
    
    
    setList3(newList);
   setNomContParticipant('');
   setMontantContParticipant('');
    
    
    //console.log(list1);
      }

  //contribution des participants
  const [nomContParticipant, setNomContParticipant] = useState("");
  const [montantContParticipant, setMontantContParticipant] = useState();
//la liste des frais couverts 

const onChangeNomContParticipation = (e) =>{
  const nomContParticipant = e.target.value;
  setNomContParticipant(nomContParticipant);
}

const onChangeMontantContParticipant = (e) =>{
  const montantContParticipant = e.target.value;
  setMontantContParticipant(montantContParticipant);
}

  const rows1 = list1.map((row) =>{
return(
  <tr key={row.id}>
  <td>{row.libelle}</td>
  <td>{row.information}</td>
  <td><Button style={{backgroundColor:"#F64642"}} onClick={() => handleRemoveItem(row.id)}>x
  </Button></td>
    </tr>
);
  }
   
  )
  ;

  const rows3 = list3.map((row) =>{
    return(
      <tr key={row.id}>
      <td>{row.nom}</td>
      <td>{row.montant}</td>
      <td><Button style={{backgroundColor:"#F64642"}} onClick={() => handleRemoveItem3(row.id)}>x
      </Button></td>
        </tr>
    );
      }
       
      )
      ;
    
//commité d'organisation non local
const [nomCorgNonLocal, setNomCorgNonLocal] = useState("");
const [prenomCorgNonLocal, setPrenomCorgNonLocal] = useState("");
const [telOrgNonLocal, setTelOrgNonLocal] = useState("");
const [emailCorgNonLocal, setEmailCorgNonLocal] = useState("");
const [universityCorgNonLocal, setUniversityCorgNonLocal] = useState("");
const [etablisssementCorgNonLocal, setEtablissementCorgNonLocal] = useState("");
const [villeCorgNonLocal, setVilleCorgNonLocal] = useState("");


  const ths1 = (
    <tr>
      <th>Libelle</th>
      <th> Information</th>
      <th>Action</th>
      
    </tr>
  );
const ths3 = (
<tr>
  <th>Nom</th>
  <th>Montant</th>
  <th>Action</th>
</tr>
);
  const ths2 = (
    <tr>
      <th>Nom</th>
      <th> Montant</th>
      <th>Type</th>
      <th> Nature</th>
      <th>Action</th>
      
    </tr>
  );

  //handle add form 2
  const handleAddForm2 =()=>{
   
    let newId = list2.length + 1;
    
    const result = {id:newId, nom: nomContributeur, montant: montantConribution, nature: natureContribution, type: typeContribution };
    const newList = [...list2, {...result}];
    
    
    setList2(newList);
    setNomContributeur('');
    setNatureContribution(null);
    setTypeContribution(null);
    setMontantContribution('');
    
    
    console.log(list2);
      };

      
  const rows2 = list2.map((row) =>{
    return(
      <tr key={row.id}>
      <td>{row.nom}</td>
      <td>{row.montant}</td>
      <td>{row.type}</td>
      <td>{row.nature}</td>
      <td><Button style={{backgroundColor:"#F64642"}} onClick={() => handleRemoveItem2(row.id)}>x
      </Button></td>
        </tr>
    );
      }
       
      )
      ;


  const ths7=(
    <tr>
    <th>nom & prénom</th>
    <th> email</th>
    <th>téléphone</th>
    <th> type de l'entité</th>
    <th>nom de l'entité</th>
    <th> pays</th>
    <th>action</th>
    
  </tr>
  );
  const ths5=(
    <tr>
    <th>nom & prénom</th>
    <th> email</th>
    <th>téléphone</th>
    <th> type de l'entité</th>
    <th>nom de l'entité</th>
  </tr>
  );

  const ths4=(
    <tr>
    <th>nom & prénom</th>
    <th> établissement</th>
    <th>email</th>
    <th> téléphone</th>
    <th> université</th>
    <th> ville</th>
    <th>Action</th>
    
  </tr>
  );


  const typesContribution=[
    { value: 'etablissement', label: 'Etablissement' },
    { value: 'sponsors', label: 'Sponsors' }
    
  ];
//hébergement, restauration, pause café, impression de documents
  const naturesContribution=[
    { value: 'hébergement', label: 'Hébergement' },
    { value: 'restauration', label: 'Restauration' },
    { value: 'pause cafe', label: 'Pause café' },
    { value: 'impression documents', label: 'Impression de documents' }

  ]
  const [active, setActive] = useState(1);
    const nextStep = () => setActive((current) => (current < 5 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
  return (
    <div>
    <div class="wrapper">
        {/*
        <nav id="sidebar">
            <div class="sidebar-header">
                <h3 style={{color:"#fff"}}>Menu</h3>
                <strong>BS</strong>
            </div>

            <ul class="list-unstyled components">
                <li class="active">
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                        <i class="fas fa-home"></i>
                        Home
                    </a>
                    <ul class="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <a href="#">Home 1</a>
                        </li>
                        <li>
                            <a href="#">Home 2</a>
                        </li>
                        <li>
                            <a href="#">Home 3</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">
                        <i class="fas fa-briefcase"></i>
                        About
                    </a>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                        <i class="fas fa-copy"></i>
                        Pages
                    </a>
                    <ul class="collapse list-unstyled" id="pageSubmenu">
                        <li>
                            <a href="#">Page 1</a>
                        </li>
                        <li>
                            <a href="#">Page 2</a>
                        </li>
                        <li>
                            <a href="#">Page 3</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">
                        <i class="fas fa-image"></i>
                        Portfolio
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fas fa-question"></i>
                        FAQ
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fas fa-paper-plane"></i>
                        Contact
                    </a>
                </li>
            </ul>

            <ul class="list-unstyled CTAs">
                <li>
                    <a href="https://bootstrapious.com/tutorial/files/sidebar.zip" class="download">Download source</a>
                </li>
                <li>
                    <a href="https://bootstrapious.com/p/bootstrap-sidebar" class="article">Back to article</a>
                </li>
            </ul>
        </nav>

  */}
        <div id="content">

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">

                    <button type="button" id="sidebarCollapse" class="btn btn-info">
                        <i class="fas fa-align-left"></i>
                        <span>Toggle Sidebar</span>
                    </button>
                    <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-align-justify"></i>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="nav navbar-nav ml-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Page</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Page</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Page</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Page</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
           <Container style={{ width: '100%'}}>
            
           <Card shadow="sm" p="lg" radius="md" withBorder width="100%">
            <Stepper active={active} onStepClick={setActive} breakpoint="sm" 
   
   sx={{
    "& 	.mantine-Stepper-stepIcon": {
      borderColor: "#A34F23"
    
    },
   
    "& .mantine-Stepper-stepCompletedIcon": {
      borderColor: "#A34F23",
      backgroundColor: "#A34F23"
      
    },
 
 }}>
           
        <Stepper.Step label="First step" description="Create an account">
        <Text style={{color: "#A34F23"}}><strong>Informations concernant la manifestation</strong></Text>
    <Box
      sx={{
        margin: '1rem 0',
      }}
    >
      <div className='row'>
        <div className='col-md-6'>
        <TextInput
        placeholder=""
        required
        label="Intitulé de la manifestation"
      />
        </div>
        <div className='col-md-6'>

        <TextInput
        placeholder=""
        required
        label="Type(Workshop ...)"
      />
        </div>
        </div>
        <div className='row'>
        <div className='col-md-6'>
            
        <TextInput
        placeholder=""
        required
        label="Lieu"
      />
        </div>
        <div className='col-md-6'>
        
        <TextInput
        placeholder=""
        required
        label="Etendue(Locale, Régionale...)"
      />
        </div>
        </div>

        <div className='row'>
        <div className='col-md-6'>
           
        <TextInput
        placeholder=""
        required
        label="Site Web de la manifestation"
      />
        </div>
        <div className='col-md-6'>
       
        <TextInput
        placeholder=""
        required
        label="Agence organisatrice"
      />
        </div>
        </div>

        
           
        <TextInput
        placeholder=""
        required
        label="Partenaire(s) impliqué(s)"
      />
       

       
            <NativeSelect  data={[]} label="Etablissement(s) de l’UCAM impliqué(s) dans l’organisation" />
        

        <div className='row'>
        <div className='col-md-6'>
        <TextInput
        label="Nombre etudiants locaux"
        placeholder=""
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
        placeholder=""
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
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Verify email">
         <Text style={{color: "#A34F23"}}><strong>Comment la gestion financière est-elle prévue ?</strong></Text>
         <TextInput
        placeholder=""
        required
        label="Libelle (Agence, association scientifique ...)"
        value={libelle}
        onChange={onChangeLibelle}
      />
       <TextInput
        placeholder=""
        required
        label="Information"
        value={information}
        onChange={onChangeInformation}
      />
      
      <Group position="right" mt="xl">
      <Button style={{backgroundColor:"#A34F23"}} onClick={handleAddForm1}>+</Button>
      </Group>
      <Space h="md" />
      <Card shadow="sm" p="lg" radius="md" withBorder position="center">
      <Group>
      <Table captionSide="bottom" highlightOnHover>
      <caption>Some elements from periodic table</caption>
      <thead>{ths1}</thead>
      <tbody>{rows1}</tbody>

    </Table>
      </Group>

      </Card>
      <Space h="md" />

       <Text style={{color: "#A34F23"}}>Contributeurs(Sponsors,établissements)</Text>
        <TextInput
        placeholder=""
        required
        value={nomContributeur}
        label="Nom"
        onChange={onChangeNomContributeur}
      />
       <TextInput
        placeholder=""
        required
        label="Montant"
        value={montantConribution}
        onChange={onChangeMontantContribution}
      />
     <NativeSelect required label="Nature"data={naturesContribution}  value={natureContribution} onChange={onChangeNatureContribution}/>
     <NativeSelect  required label="Type" data={typesContribution} value={typeContribution} onChange={onChangeTypeContribution}/>
       <Group position="right" mt="xl">
      <Button style={{backgroundColor:"#A34F23"}} onClick={handleAddForm2}>+</Button>
      </Group>
      <Space h="md" />
      <Card shadow="sm" p="lg" radius="md" withBorder position="center">
      
      <Table captionSide="bottom" highlightOnHover>
      <caption>Some elements from periodic table</caption>
      <thead>{ths2}</thead>
      <tbody>{rows2}</tbody>

    </Table>


      </Card>
      
       
        </Stepper.Step>

        <Stepper.Step label="Third step" description="Get full access">
          <Text style={{color: "#A34F23"}}><strong>Contribution des participants</strong></Text>
          <MultiSelect
      data={[]}
      label="Les frais d’inscription couvrent (selection multiple) :"
      placeholder=""
      
    />
    <TextInput
        placeholder=""
        required
        label="Nom"
        onChange={onChangeNomContParticipation}
        value={nomContParticipant}
      />
      <TextInput
        placeholder=""
        required
        label="Montant"
        onChange={onChangeMontantContParticipant}
        value={montantContParticipant}
      />
       <Group position="right" mt="xl">
      <Button style={{backgroundColor:"#A34F23"}} onClick={handleAddForm3}>+</Button>
      </Group>
      <Space h="md" />
      <Card shadow="sm" p="lg" radius="md" withBorder position="center">
      
      <Table captionSide="bottom" highlightOnHover>
      <caption>Some elements from periodic table</caption>
      <thead>{ths3}</thead>
      <tbody>{rows3}</tbody>

    </Table>


      </Card>
        </Stepper.Step>
        
        <Stepper.Step label="Final step" description="Get full access">
          <Text color="#A34F23"><strong>Comité d'organisation</strong></Text>
          <Space h="xl" />
          
          <Text color="#A34F23"><strong>Comité d'organisation local</strong></Text>
          <Space h="md" />
          <MultiSelect
      data={[]}
      label="Chercheurs"
      placeholder="Chercheur/Etablissement/Structure"
    />
         <Space h="xl" />
         <Text color="#A34F23"><strong>Comité d'organisation non local</strong></Text>
         
          <Space h="md" />
          <TextInput
        placeholder=""
        required
        label="Nom"
      />

<TextInput
        placeholder=""
        required
        label="Prénom"
      />

<TextInput
        placeholder=""
        required
        label="Téléphone"
      />

<TextInput
        placeholder=""
        required
        label="Email"
      />

<TextInput
        placeholder=""
        required
        label="Université"
      />

<TextInput
        placeholder=""
        required
        label="Etablissement"
      />
      <TextInput
        placeholder=""
        required
        label="Ville"
      />
       <Group position="right" mt="xl">
      <Button style={{backgroundColor:"#A34F23"}}>+</Button>
      </Group>
      <Space h="md" />
      <Card shadow="sm" p="lg" radius="md" withBorder position="center">
      <Group>
      <Table captionSide="bottom" highlightOnHover>
      <caption>Some elements from periodic table</caption>
      <thead>{ths4}</thead>
      <tbody></tbody>

    </Table>
      </Group>

      </Card>
        </Stepper.Step>

        <Stepper.Step label="Final step" description="Get full access">
          <Text color="#A34F23"><strong>Comité scientifique</strong></Text>
          <Space h="xl" />
          
          <Text color="#A34F23"><strong>Comité scientifique local</strong></Text>
          <Space h="md" />
          <TextInput
        placeholder=""
        required
        label="Nom"
      />
       <TextInput
        placeholder=""
        required
        label="Prénom"
      />
       <TextInput
        placeholder=""
        required
        label="Téléphone"
      />
       <TextInput
        placeholder=""
        required
        label="Email"
      />
       <TextInput
        placeholder=""
        required
        label="Type de l'entité"
      />
       <TextInput
        placeholder=""
        required
        label="Nom de l'entité"
      />
       <Group position="right" mt="xl">
      <Button style={{backgroundColor:"#A34F23"}}>+</Button>
      </Group>
      <Space h="md" />
      <Card shadow="sm" p="lg" radius="md" withBorder position="center">
      <Group>
      <Table captionSide="bottom" highlightOnHover>
      <caption>Some elements from periodic table</caption>
      <thead>{ths5}</thead>
      <tbody></tbody>

    </Table>
      </Group>

      </Card>
         <Space h="xl" />
         <Text color="#A34F23"><strong>Comité scientifique non local</strong></Text>
         
          <Space h="md" />
          <TextInput
        placeholder=""
        required
        label="Nom"
      />

<TextInput
        placeholder=""
        required
        label="Prénom"
      />

<TextInput
        placeholder=""
        required
        label="Téléphone"
      />

<TextInput
        placeholder=""
        required
        label="Email"
      />

<TextInput
        placeholder=""
        required
        label="Type de l'entité"
      />

<TextInput
        placeholder=""
        required
        label="Nom de l'entité"
      />
      <TextInput
        placeholder=""
        required
        label="Pays"
      />
       <Group position="right" mt="xl">
      <Button style={{backgroundColor:"#A34F23"}}>+</Button>
      </Group>
      <Space h="md" />
      <Card shadow="sm" p="lg" radius="md" withBorder position="center">
      <Group>
      <Table captionSide="bottom" highlightOnHover>
      <caption>Some elements from periodic table</caption>
      <thead>{ths7}</thead>
      <tbody></tbody>

    </Table>
      </Group>

      </Card>
        </Stepper.Step>
        <Stepper.Completed>
        <Space h="xl" />
         <Text color="#A34F23"><strong>Soutien sollicité de l’Université</strong></Text>
         <Space h="md" />
         
        </Stepper.Completed>
      </Stepper>

      <Group position="center" mt="xl">
        <Button variant="default" onClick={prevStep}>Back</Button>
        <Button onClick={nextStep} style={{backgroundColor:"#A34F23"}}>Next step</Button>
      </Group>
     
       
    </Card>
            
           </Container>
         </div>
         </div>
         </div>
 
 
  );
}

export default Second;