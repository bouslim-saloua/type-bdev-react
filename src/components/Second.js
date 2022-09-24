
import React from 'react';
import { Card, Box, TextInput, Text,  Button, Group, Select, FileInput, Container,Table, Space , MultiSelect} from '@mantine/core';
import { IconUpload } from '@tabler/icons';
import { DatePicker } from '@mantine/dates';
import { Stepper } from '@mantine/core';
import { useState } from "react";

import "../css/Informations.css";

const  Second=() =>{
  const ths1 = (
    <tr>
      <th>Libelle</th>
      <th> Information</th>
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


  const [active, setActive] = useState(1);
    const nextStep = () => setActive((current) => (current < 5 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
  return (
    <div>
    <div class="wrapper">
        
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
            <Stepper active={active} onStepClick={setActive} breakpoint="sm" backgroundColor="#A34F23">
           
        <Stepper.Step label="First step" description="Create an account">
        <Text style={{color: "#A34F23"}}><strong>Informations concernant la manifestation</strong></Text>
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
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Verify email">
         <Text style={{color: "#A34F23"}}><strong>Comment la gestion financière est-elle prévue ?</strong></Text>
         <TextInput
        placeholder="John Doe"
        required
        label="Libelle (Agence, association scientifique ...)"
      />
       <TextInput
        placeholder="John Doe"
        required
        label="Information"
      />
      
      <Group position="right" mt="xl">
      <Button style={{backgroundColor:"#A34F23"}}>+</Button>
      </Group>
      <Space h="md" />
      <Card shadow="sm" p="lg" radius="md" withBorder position="center">
      <Group>
      <Table captionSide="bottom" highlightOnHover>
      <caption>Some elements from periodic table</caption>
      <thead>{ths1}</thead>
      <tbody></tbody>

    </Table>
      </Group>

      </Card>
      <Space h="md" />

       <Text style={{color: "#A34F23"}}>Contributeurs(Sponsors,établissements)</Text>
        <TextInput
        placeholder="John Doe"
        required
        label="Nom"
      />
       <TextInput
        placeholder="John Doe"
        required
        label="Montant"
      />
     <Select required label="Nature"data={[]} />
     <Select  required label="Type" data={[]} />
       <Group position="right" mt="xl">
      <Button style={{backgroundColor:"#A34F23"}}>+</Button>
      </Group>
      <Space h="md" />
      <Card shadow="sm" p="lg" radius="md" withBorder position="center">
      
      <Table captionSide="bottom" highlightOnHover>
      <caption>Some elements from periodic table</caption>
      <thead>{ths2}</thead>
      <tbody></tbody>

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
      />
      <TextInput
        placeholder=""
        required
        label="Montant"
      />
       <Group position="right" mt="xl">
      <Button style={{backgroundColor:"#A34F23"}}>+</Button>
      </Group>
      <Space h="md" />
      <Card shadow="sm" p="lg" radius="md" withBorder position="center">
      
      <Table captionSide="bottom" highlightOnHover>
      <caption>Some elements from periodic table</caption>
      <thead>{ths2}</thead>
      <tbody></tbody>

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