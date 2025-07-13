/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const {
  database,
  schoolCollection,
  courseCollection,
  enrollmentCollection,
} = require("./constant.js");

// Create a new database.
use(database);

// Create a new collection.
db.createCollection(schoolCollection);

db.getCollection("schools").insertMany([
  {
    _id: ObjectId("665f1fa4a7d3f1a0aabc1001"),
    name: "Greenwood High School",
    address: "123 Maple Street, Springfield",
    principal: "Mr. John Adams",
  },
  {
    _id: ObjectId("665f1fa4a7d3f1a0aabc1002"),
    name: "Riverside Public School",
    address: "456 Oak Avenue, Riverdale",
    principal: "Ms. Linda Carter",
  },
]);

// Create courses collection
db.createCollection(courseCollection);
// Insert sample course records
db.getCollection(courseCollection).insertMany([
  {
    _id: ObjectId("665f1fa4a7d3f1a0aabc1003"),
    title: "Mathematics 101",
    description: "Basic concepts in algebra and geometry",
    schoolId: ObjectId("665f1fa4a7d3f1a0aabc1001"),
  },
  {
    _id: ObjectId("665f1fa4a7d3f1a0aabc1004"),
    title: "English Literature",
    description: "Introduction to classic and modern literature",
    schoolId: ObjectId("665f1fa4a7d3f1a0aabc1001"),
  },
  {
    _id: ObjectId("665f1fa4a7d3f1a0aabc1005"),
    title: "Biology",
    description: "Fundamentals of cell biology and genetics",
    schoolId: ObjectId("665f1fa4a7d3f1a0aabc1002"),
  },
  {
    _id: ObjectId("665f1fa4a7d3f1a0aabc1006"),
    title: "History",
    description: "World history from ancient to modern times",
    schoolId: ObjectId("665f1fa4a7d3f1a0aabc1002"),
  },
  {
    _id: ObjectId("665f1fa4a7d3f1a0aabc1007"),
    title: "Orientation Seminar",
    description: "Orientation for new students",
    schoolId: ObjectId("665f1fa4a7d3f1a0aabc1001"),
  },
]);
// Insert sample enrollment collection and documents
// Create enrollments collection
db.createCollection(enrollmentCollection);
// Insert sample enrollment records
db.getCollection(enrollmentCollection).insertMany([
  {
    _id: ObjectId("665f2fa4a7d3f1a0aabc2001"),
    studentName: "Alice Johnson",
    courseId: ObjectId("665f1fa4a7d3f1a0aabc1003"),
    enrollmentDate: ISODate("2025-07-01T09:00:00Z"),
  },
  {
    _id: ObjectId("665f2fa4a7d3f1a0aabc2002"),
    studentName: "Bob Smith",
    courseId: ObjectId("665f1fa4a7d3f1a0aabc1004"),
    enrollmentDate: ISODate("2025-07-02T10:30:00Z"),
  },
  {
    _id: ObjectId("665f2fa4a7d3f1a0aabc2003"),
    studentName: "Catherine Lee",
    courseId: ObjectId("665f1fa4a7d3f1a0aabc1005"),
    enrollmentDate: ISODate("2025-07-03T11:15:00Z"),
  },
  {
    _id: ObjectId("665f2fa4a7d3f1a0aabc2004"),
    studentName: "David Martinez",
    courseId: ObjectId("665f1fa4a7d3f1a0aabc1006"),
    enrollmentDate: ISODate("2025-07-04T13:45:00Z"),
  },
  {
    _id: ObjectId("665f2fa4a7d3f1a0aabc2005"),
    studentName: "Emily Davis",
    courseId: ObjectId("665f1fa4a7d3f1a0aabc1001"),
    enrollmentDate: ISODate("2025-07-05T08:20:00Z"),
  },
]);
// The prototype form to create a collection:
/* db.createCollection( <name>,
  {
    capped: <boolean>,
    autoIndexId: <boolean>,
    size: <number>,
    max: <number>,
    storageEngine: <document>,
    validator: <document>,
    validationLevel: <string>,
    validationAction: <string>,
    indexOptionDefaults: <document>,
    viewOn: <string>,
    pipeline: <pipeline>,
    collation: <document>,
    writeConcern: <document>,
    timeseries: { // Added in MongoDB 5.0
      timeField: <string>, // required for time series collections
      metaField: <string>,
      granularity: <string>,
      bucketMaxSpanSeconds: <number>, // Added in MongoDB 6.3
      bucketRoundingSeconds: <number>, // Added in MongoDB 6.3
    },
    expireAfterSeconds: <number>,
    clusteredIndex: <document>, // Added in MongoDB 5.3
  }
)*/

// More information on the `createCollection` command can be found at:
// https://www.mongodb.com/docs/manual/reference/method/db.createCollection/
