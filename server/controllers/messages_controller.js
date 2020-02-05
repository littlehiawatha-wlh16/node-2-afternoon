let messages = []
let id = 0

module.exports = {
   
   create: (req, res) => {
      const {text, time} = req.body; /// what is the req.body doing?
      messages.push({id, text, time}); // message being invoked
      id++; // id = id + 1 ... incrementing by one each new message
      res.status(200).send(messages); /// what is happening here?
   },

   read: (req, res) => {
      res.status(200).send(messages)
   },

   update: (req, res) => {
     // console.log(req)
      const {text} = req.body
      const updateID = req.params.id;
      const messageIndex = messages.findIndex( (message) => message.id == updateID);
      let message = messages[messageIndex];

      messages[messageIndex] = {
         id: message.id,
         text: text || message.text,
         time: message.time
      };

      res.status(200).send(messages);

   },

   delete: (req, res) => {
      const deleteID = req.params.id;
      const messageIndex = messages.findIndex(message => message.id == deleteID);
      messages.splice(messageIndex, 1);
      res.status(200).send(messages);
   }

}

