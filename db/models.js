const db = require('./connection');

let querys = {
    getprincipal: 'SELECT * FROM principal',
    insertprincipal: 'INSERT INTO principal (cedula, rif, IVSS, apellido1, apellido2, nombre1, nombre2, fecha_nacimiento, edad, sangre, ingreso_programa, ingreso_senifa, cargo, instruccion, telefono, movil, centro_votacion, direccion_habitacion, nucleo_familiar, menores_18, mayores_18, adulto_mayor, estatus, municipio, parroquia, simoncito_id, f_0_11m, f_1a, f_2a, f_3a, f_4a, total_f,  m_0_11m, m_1a, m_2a, m_3a, m_4a, total_m, matricula_tota, beneficiado_cnae, conu_cos, base_misiones, estudia, carrera, correo, whatsapp, telegram, twitter, facebook, instagram, cuenta_usa, habilidad_motora, codigo_cp, serial_cp, codigo_psu, serial_psu, alergia_medicamento, diagnostico_medico, fecha_diagnostico, vocera, cuenta_bancaria) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )',
    // updateprincipal: 'UPDATE producto SET code = ?, name = ?, lab = ?, quantity = ?, description = ?, price = ?, category_id = ? WHERE id = ?',
    getsimoncitos: 'SELECT * FROM simoncitos',
    insertsimoncito: 'INSERT INTO simoncitos (simoncito, codigo, nombre, direccion, referencia, escuela, DEA, director, telefono, correo) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    // updatesimoncito: 'UPDATE imagen SET url = ?, producto_id = ?, destacado = ? WHERE id = ?'
}
module.exports = {
    getprincipal(){
        return new Promise((resolve, reject)=>{
            db.all(querys.getprincipal, (err,rows)=>{
                if(err) reject(err);
                resolve(rows);
            })
        })
    },

    insertprincipal(cedula, rif, IVSS, apellido1, apellido2, nombre1, nombre2, fecha_nacimiento, edad, sangre, ingreso_programa, ingreso_senifa, cargo, instruccion, telefono, movil, centro_votacion, direccion_habitacion, nucleo_familiar, menores_18, mayores_18, adulto_mayor, estatus, municipio, parroquia, simoncito_id, f_0_11m, f_1a, f_2a, f_3a, f_4a, total_f,  m_0_11m, m_1a, m_2a, m_3a, m_4a, total_m, matricula_tota, beneficiado_cnae, conu_cos, base_misiones, estudia, carrera, correo, whatsapp, telegram, twitter, facebook, instagram, cuenta_usa, habilidad_motora, codigo_cp, serial_cp, codigo_psu, serial_psu, alergia_medicamento, diagnostico_medico, fecha_diagnostico, vocera, cuenta_bancaria){
        return new Promise((resolve, reject) => {
            db.run(querys.insertprincipal, [cedula, rif, IVSS, apellido1, apellido2, nombre1, nombre2, fecha_nacimiento, edad, sangre, ingreso_programa, ingreso_senifa, cargo, instruccion, telefono, movil, centro_votacion, direccion_habitacion, nucleo_familiar, menores_18, mayores_18, adulto_mayor, estatus, municipio, parroquia, simoncito_id, f_0_11m, f_1a, f_2a, f_3a, f_4a, total_f,  m_0_11m, m_1a, m_2a, m_3a, m_4a, total_m, matricula_tota, beneficiado_cnae, conu_cos, base_misiones, estudia, carrera, correo, whatsapp, telegram, twitter, facebook, instagram, cuenta_usa, habilidad_motora, codigo_cp, serial_cp, codigo_psu, serial_psu, alergia_medicamento, diagnostico_medico, fecha_diagnostico, vocera, cuenta_bancaria], (err) => {
                if(err) reject(err);
                    resolve()
            })
        })
    },

    updateprincipal(id, cedula, rif, IVSS, apellido1, apellido2, nombre1, nombre2, fecha_nacimiento, edad, sangre, ingreso_programa, ingreso_senifa, cargo, instruccion, telefono, movil, centro_votacion, direccion_habitacion, nucleo_familiar, menores_18, mayores_18, adulto_mayor, estatus, municipio, parroquia, simoncito_id, f_0_11m, f_1a, f_2a, f_3a, f_4a, total_f,  m_0_11m, m_1a, m_2a, m_3a, m_4a, total_m, matricula_tota, beneficiado_cnae, conu_cos, base_misiones, estudia, carrera, correo, whatsapp, telegram, twitter, facebook, instagram, cuenta_usa, habilidad_motora, codigo_cp, serial_cp, codigo_psu, serial_psu, alergia_medicamento, diagnostico_medico, fecha_diagnostico, vocera, cuenta_bancaria){
        return new Promise((resolve, reject) => {
            db.run(querys.updateprincipal, [cedula, rif, IVSS, apellido1, apellido2, nombre1, nombre2, fecha_nacimiento, edad, sangre, ingreso_programa, ingreso_senifa, cargo, instruccion, telefono, movil, centro_votacion, direccion_habitacion, nucleo_familiar, menores_18, mayores_18, adulto_mayor, estatus, municipio, parroquia, simoncito_id, f_0_11m, f_1a, f_2a, f_3a, f_4a, total_f,  m_0_11m, m_1a, m_2a, m_3a, m_4a, total_m, matricula_tota, beneficiado_cnae, conu_cos, base_misiones, estudia, carrera, correo, whatsapp, telegram, twitter, facebook, instagram, cuenta_usa, habilidad_motora, codigo_cp, serial_cp, codigo_psu, serial_psu, alergia_medicamento, diagnostico_medico, fecha_diagnostico, vocera, cuenta_bancaria, id], (err) => {
                if(err) reject(err);
                resolve();
            })
        })
    },

    getsimoncitos(){
        return new Promise((resolve, reject)=>{
            db.all(querys.getsimoncitos, (err,rows)=>{
                if(err) reject(err);
                resolve(rows);
            })
        })
    },

    insertsimoncito(simoncito, codigo, nombre, direccion, referencia, escuela, DEA, director, telefono, correo){
        return new Promise((resolve, reject) => {
            db.run(querys.insertsimoncito, [simoncito, codigo, nombre, direccion, referencia, escuela, DEA, director, telefono, correo], (err) => {
                if(err) reject(err);
                resolve();
            })
        })
    },
    
    updatesimoncito(id, simoncito, codigo, nombre, direccion, referencia, escuela, DEA, director, telefono, correo){
        return new Promise((resolve, reject) => {
            db.run(querys.updatesimoncito, [ simoncito, codigo, nombre, direccion, referencia, escuela, DEA, director, telefono, correo, id], (err) => {
                if(err) reject(err);
                resolve();
            })
        })
    },
      
}