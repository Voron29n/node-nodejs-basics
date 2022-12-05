const parseEnv = () => {
    const stringEnv = Object.entries(process.env)
        .filter(([key]) => key.includes('RSS_'))
        .map(([key, value]) => `${key}=${value}`)//[['RSS_bar','baz']['RSS_foo','bar']] => ['RSS_bar=baz', 'RSS_foo=bar']
        .join('; ')
    console.log(stringEnv)
};

parseEnv();
