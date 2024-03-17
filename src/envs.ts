const env = import.meta.env;

const envs = {
  MAIL: env.VITE_APP_MAIL,
  PASS: env.VITE_APP_PASS,
};

export default envs;
