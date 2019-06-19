const DevEnv = {
  secretKey: 't1r2a3f4f5i6c',
  hkey: '5ecr3tr6ff10',
  mail: {
    provider: {
      host: 'smtp.gmail.com',
      port: 465,
      auth:{
        user: 'realxiz.zixlaer@gmail.com',
        pass: 'Boy350260356'
      }
    },
    from: 'realxiz.zixlaer@gmail.com'
  },
  resetPassUrl: ''
}
const ProdEnv = {
  secretKey: 't1r2a3f4f5i6c',
  hkey: '5ecr3tr6ff10',
  mail: {
    provider: {
      host: 'smtp.gmail.com',
      port: 465,
      auth: {
        user: 'realxiz.zixlaer@gmail.com',
        pass: 'Boy350260356'
      }
    },
    from: 'realxiz.zixlaer@gmail.com'
  },
  resetPassUrl: ''
}


export const err_msg = [{
  code: 1,
  message: 'กรุณากรอกข้อมูลให้ครบถ้วน'
}, {
  code: 2,
  message: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง กรุณาตรวจสอบอีกครั้ง'
}, {
  code: 3,
  message: 'กรุณากรอกรหัสผ่านและยืนยันรหัสผ่านให้ตรงกัน'
}, {
  code: 4,
  message: 'กรุณาเปลี่ยนรหัสผ่านใหม่ที่ไม่ซ้ำกับรหัสผ่านเดิม'
}, {
  code: 5,
  message: 'รหัสผ่านเก่าไม่ถูกต้อง กรุณากรอกรหัสผ่านใหม่'
}, {
  code: 6,
  message: 'ไม่พบข้อมูลผู้ใช้งานภายในระบบ กรุณาตรวจสอบข้อมูลใหม่อีกครั้ง'
}, {
  code: 404,
  message: 'ไม่พบข้อมูลที่ต้องการค้นหา'
}, {
  code: 401,
  message: 'Access Token ไม่ถูกส่งมาหรือ Access Token ไม่ถูกต้อง'
}, {
  code: 403,
  message: 'ไม่มี Event ที่เปิดในเวลานี้'
}, {
  code: 500,
  message: 'เกิดข้อผิดพลาด กรุณาติดต่อ Administrator'
}]


export const AppConfigure = DevEnv
