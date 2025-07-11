import React from 'react'

const SimpleList = (props) => {
    const { data } = props;

    if (!data || !data.sections) {
        return null;
    }

    return (
        <section className="wpo-simple-list-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        
                        {data.sections.map((section, sectionIndex) => (
                            <div className="list-section" key={sectionIndex}>
                                <div className="section-header">
                                    <h3 className="section-title">{section.title}</h3>
                                </div>
                                <div className="items-grid">
                                    {section.items.map((item, itemIndex) => (
                                        <div className="list-item" key={itemIndex}>
                                            <div className="item-content">
                                                <div className="item-number">
                                                    {itemIndex + 1}
                                                </div>
                                                <div className="item-text">
                                                    <p>{item}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            <style jsx>{`
                .wpo-simple-list-section {
                    position: relative;
                    background: #f8f9fa;
                }
                
                .section-heading {
                    color: var(--hikev-primary-dark);
                    font-weight: 700;
                    margin-bottom: 15px;
                    font-size: 32px;
                }
                
                .section-description {
                    color: var(--hikev-primary-dark);
                    font-size: 16px;
                    line-height: 1.6;
                    margin-bottom: 40px;
                }
                
                .list-section {
                    margin-bottom: 40px;
                    background: white;
                    border-radius: 15px;
                    padding: 30px;
                    box-shadow: 0 5px 20px rgba(0,0,0,0.08);
                }
                
                .section-header {
                    margin-bottom: 30px;
                    text-align: center;
                    border-bottom: 3px solid var(--hikev-primary-light);
                    padding-bottom: 15px;
                }
                
                .section-title {
                    color: var(--hikev-primary-dark);
                    font-weight: 600;
                    font-size: 24px;
                    margin: 0;
                }
                
                .items-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 20px;
                }
                
                .list-item {
                    background: #f8f9fa;
                    border-radius: 10px;
                    padding: 20px;
                    transition: all 0.3s ease;
                    border-left: 4px solid transparent;
                }
                
                .list-item:hover {
                    background: white;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                    border-left-color: var(--hikev-primary-light);
                    transform: translateY(-2px);
                }
                
                .item-content {
                    display: flex;
                    align-items: flex-start;
                    gap: 15px;
                }
                
                .item-number {
                    background: var(--hikev-gradient);
                    color: white;
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 600;
                    font-size: 16px;
                    flex-shrink: 0;
                    box-shadow: 0 3px 10px var(--hikev-shadow-blue);
                }
                
                .item-text {
                    flex: 1;
                }
                
                .item-text p {
                    margin: 0;
                    color: var(--hikev-primary-dark);
                    font-size: 15px;
                    line-height: 1.6;
                    font-weight: 500;
                }
                
                @media (max-width: 768px) {
                    .items-grid {
                        grid-template-columns: 1fr;
                    }
                    
                    .section-heading {
                        font-size: 28px;
                    }
                    
                    .section-title {
                        font-size: 20px;
                    }
                    
                    .list-section {
                        padding: 20px;
                    }
                }
            `}</style>
        </section>
    )
}

export default SimpleList;
