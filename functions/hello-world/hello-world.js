// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
  try {
    const subject = process.env.MY_SECRET + ' CHECK24';
    console.log(subject);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${subject}` }),
      headers: { 'content-type': 'application/json' }
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
