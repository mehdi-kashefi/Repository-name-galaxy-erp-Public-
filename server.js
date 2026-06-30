{
  "exportKind": "toolsina-tool-result",
  "toolSlug": "js-formatter",
  "docTitle": "مرتب کردن JavaScript آنلاین — نتیجه",
  "generatedAt": "۹ تیر ۱۴۰۵،‏ ۲۳:۴۲",
  "rows": [
    {
      "label": "Javascript",
      "value": "const express = require(\"express\");\n\nconst cors = require(\"cors\");\n\n\nconst app = express();\n\napp.use(cors());\n\napp.use(express.json());\n\n\napp.get(\"/\", (req, res) =>  {\n  \n  res.json( {\n     service: \"Galaxy ERP\", status: \"RUNNING\"\n  }\n  );\n}\n);\n\n\nlet repairs = [];\n\n\napp.post(\"/repair\", (req, res) =>  {\n  \n  const r =  {\n     id: Date.now(), ...req.body\n  }\n  ;\n  \n  repairs.push(r);\n  \n  res.json(r);\n}\n);\n\n\napp.get(\"/repair\", (req, res) => res.json(repairs));\n\n\napp.post(\"/ai\", (req, res) =>  {\n  \n  const issue = req.body.issue || \"\";\n  \n  res.json( {\n    \n    problem: issue.includes(\"no power\") ? \"Power Issue\" : \"Unknown\",\n    cost: issue.includes(\"no power\") ? \"$20-$50\" : \"N/A\"\n  }\n  );\n}\n);\n\n\napp.listen(3000, () => console.log(\"RUNNING ON 3000\"));"
    }
  ]
}