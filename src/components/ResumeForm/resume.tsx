"use client"
import React from 'react'
import { useState } from 'react';
import { Document, Page } from 'react-pdf';


const ResumePreview = () => {
    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);
    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }
    return (
        <div>
            <div>
                <Document
                    file="resume.pdf"
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
            </div>
        </div>
    )
}

export default ResumePreview