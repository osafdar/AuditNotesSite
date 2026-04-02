# Knowledge Base

![Knowledge Base](images/knwledgebase.png)

The **Knowledge Base** provides additional information about a selected Schema Item. It allows auditors to attach supplemental details directly to the audit item, creating a centralized knowledge hub.

## Purpose and Benefits

The primary goal of the Knowledge Base is to eliminate the need to switch between the truAudits application and external resources, such as Audit standard PDF files or other online materials. By consolidating information, you can streamline your workflow directly within the app.

You can use plain text or markdown to store knowledge base information like:
* Excerpts or text from Audit standard files.
* Lists of commonly used abbreviations.
* Detailed information on tools related to the selected schema item.

## Data Management and Bulk Entry

Like Schemas, all Knowledge Base information is saved in an Excel file. This allows for efficient data management and bulk data entry capabilities.

**To perform bulk data entry:**
1. First, ensure you have created a schema.
2. Navigate to the **Knowledge Base** tab located on the right pane.
3. Click on **Open Data File** to view the underlying Excel file.
4. You can now conveniently add or update multiple entries directly within the spreadsheet.

**Formatting the Excel File:**
* Ensure the data format of all columns is set to **Text** in Excel to preserve your information correctly.
* The **Item Number** column is required and acts as the essential link to the schema item.
* Auditors can add any additional columns containing their informational content *after* the **Item Number** column.

<div style="background-color: #e9ecef; border-left: 4px solid #ffc107; padding: 10px 15px; margin-top: 20px; border-radius: 4px; color: #383d41;">
    <strong>Important: File Location :</strong>
    <br/><code>{UserSelectedDocumentRepository}/SchemaTemplates/Custom/</code>
    <br/><br/>
    The file will have the same name as the Schema File Name.
</div>