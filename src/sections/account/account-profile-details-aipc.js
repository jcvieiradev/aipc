import React from 'react';
import PropTypes from 'prop-types';

import {
  Typography,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Unstable_Grid2 as Grid,
  FormControl,
  InputLabel,
  OutlinedInput,
  FilledInput
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { IMaskInput } from 'react-imask';
import { red } from '@mui/material/colors';

const memorandoMaskCustom = React.forwardRef(function memorandoMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="##.####.#/##"
      definitions={{
        '#': /[1-5]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

memorandoMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};


// const states = [
//   {
//     value: 'alabama',
//     label: 'Alabama'
//   },
//   {
//     value: 'new-york',
//     label: 'New York'
//   },
//   {
//     value: 'san-francisco',
//     label: 'San Francisco'
//   },
//   {
//     value: 'los-angeles',
//     label: 'Los Angeles'
//   }
// ];

export const AccountProfileDetails = () => {

  const formik = useFormik({
    initialValues: {
      unidadeBeneficiada: '',
      objeto: 'Impressora xxx',
      ValorTotal: 'R$10.000,00',
      unidadeCompra: '1250071',
      unidadeDescentralizadora: '1250090',
      dotacao: '1251.6.181.34.4048.1.339040.02.10.1.0',
      modalidade: 'modalidade',
      processo: '001/2023',
      despacho: '055/2022',
      memorando: '',
      msgPA: '202209058127032-2209',
      nrSei: '1250.01.0011145/2024-31',
      origem: 'orgão',
      preposto: 'fulano'
    },
    validationSchema: Yup.object({
      unidadeBeneficiada: Yup.string().required("É obrigatório preencher uma Unidade"),
      objeto: Yup.string().required("É obrigatório preencher um objeto"),
      ValorTotal: Yup.string().required("É obrigatório preencher um objeto"),
      unidadeCompra: Yup.string().required("É obrigatório preencher um objeto"),
      unidadeDescentralizadora: Yup.string().required("É obrigatório preencher uma Unidade descentralizadora"),
      dotacao: Yup.string().required("É obrigatório preencher um objeto"),
      modalidade: Yup.string().required("É obrigatório preencher um objeto"),
      memorando: Yup.string().required("É obrigatório preencher um memorando").min(12, 'min 12')
     

    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  return (
    <form
      autoComplete='off'
      noValidate
      onSubmit={formik.handleSubmit}    
    >
      <Card>
        <CardHeader
          subheader="As informações podem ser editadas"
          title="AIPC"
        />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid
              container
              spacing={3}
            >
            <Typography variant="h6"> 
            1 - Identificação:
            </Typography>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Unidade Beneficiada"
                  name="unidadeBeneficiada"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={formik.touched.unidadeBeneficiada && formik.errors.unidadeBeneficiada}
                  error={!!(formik.touched.unidadeBeneficiada && formik.errors.unidadeBeneficiada)}
                  required
                  value={formik.values.unidadeBeneficiada}            
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Objeto"
                  name="objeto"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={formik.errors.objeto}
                  error={!!formik.errors.objeto}
                  required
                  value={formik.values.objeto}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Valor total"
                  name="ValorTotal"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={formik.errors.ValorTotal}
                  error={!!formik.errors.ValorTotal}
                  required
                  value={formik.values.ValorTotal}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Unidade de Compras"
                  name="unidadeCompra"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={formik.errors.unidadeCompra}
                  error={!!formik.errors.unidadeCompra}
                  required
                  value={formik.values.unidadeCompra}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Unidade Descentralizadora da cota"
                  name="unidadeDescentralizadora"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={formik.errors.unidadeDescentralizadora}
                  error={!!formik.errors.unidadeDescentralizadora}
                  required
                  value={formik.values.unidadeDescentralizadora}
                />
              </Grid>
              {/* <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Dotação orçamentária"
                  name="state"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={formik.values.dotacao}
                >
                  {states.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid> */}
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Dotação orçamentária"
                  name="dotacao"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={formik.errors.dotacao}
                  error={!!formik.errors.dotacao}
                  required
                  value={formik.values.dotacao}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Modalidade de aquisição"
                  name="modalidade"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={formik.errors.modalidade}
                  error={!!formik.errors.modalidade}
                  required
                  value={formik.values.modalidade}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Processo de compra"
                  name="processo"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={formik.errors.processo}
                  error={!!formik.errors.processo}
                  required
                  value={formik.values.processo}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Despacho"
                  name="despacho"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={formik.errors.despacho}
                  error={!!formik.errors.despacho}
                  required
                  value={formik.values.despacho}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <FormControl variant="filled">
                <InputLabel htmlFor="component-filled">Memorando *</InputLabel>
                <FilledInput          
                  name="memorando"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={!!(formik.touched.memorando && formik.errors.memorando)}
                  value={formik.values.memorando}
                  inputComponent={memorandoMaskCustom}
                />
                <Typography color='error' variant="caption"> 
                {formik.touched.memorando && formik.errors.memorando}
                </Typography>
                </FormControl>
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Número do PA"
                  name="msgPA"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={formik.errors.msgPA}
                  error={!!formik.errors.msgPA}
                  required
                  value={formik.values.msgPA}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Número do SEI"
                  name="nrSei"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={formik.errors.nrSei}
                  error={!!formik.errors.nrSei}
                  required
                  value={formik.values.nrSei}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Origem do recurso"
                  name="origem"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={formik.errors.origem}
                  error={!!formik.errors.origem}
                  required
                  value={formik.values.origem}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Preposto"
                  name="preposto"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={formik.errors.preposto}
                  error={!!formik.errors.preposto}
                  required
                  value={formik.values.preposto}
                />
              </Grid>
              <Typography variant="h6"> 
            2 - Material ou serviço:
            </Typography>
            </Grid>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button variant="contained" type='submit'>
            Salvar
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};
