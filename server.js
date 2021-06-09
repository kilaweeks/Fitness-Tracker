mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/fitnessdb',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );