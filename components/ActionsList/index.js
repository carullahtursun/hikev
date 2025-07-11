import React from 'react'

const ActionsList = (props) => {
    const { data, bgClass = "bg-light", hideTitle = false } = props;

    return (
        <section className={`wpo-actions-section section-padding ${bgClass}`}>
            <div className="container">
                {!hideTitle && (
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="wpo-section-title text-center mb-5">
                                <h2 className="section-heading">{data.title}</h2>
                                <p className="section-description">{data.description}</p>
                            </div>
                        </div>
                    </div>
                )}
                <div className="row">
                    {data.points?.map((point, index) => (
                        <div className="col-lg-12 col-md-12 col-12" key={index}>
                            <div className="action-item">
                                <div className="action-icon">
                                    <span className="item-number">{index + 1}</span>
                                </div>
                                <div className="action-content">
                                    <p>{point}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <style jsx>{`
                .wpo-actions-section {
                    position: relative;
                }
                .section-heading {
                    color: var(--hikev-primary-dark);
                    font-weight: 600;
                    margin-bottom: 15px;
                }
                .section-description {
                    color: var(--hikev-primary-dark);
                    font-size: 16px;
                    line-height: 1.6;
                }
                .action-item {
                    display: flex;
                    align-items: flex-start;
                    margin-bottom: 25px;
                    padding: 30px;
                    background: white;
                    border-radius: 15px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.06);
                    transition: all 0.3s ease;
                    border: 1px solid #f0f0f0;
                    position: relative;
                    overflow: hidden;
                }
                .action-item::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 5px;
                    height: 100%;
                    background: var(--hikev-gradient);
                    transition: width 0.3s ease;
                }
                .action-item:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 30px rgba(0,0,0,0.12);
                }
                .action-item:hover::before {
                    width: 10px;
                }
                .action-icon {
                    margin-right: 25px;
                    flex-shrink: 0;
                    margin-top: 5px;
                }
                .item-number {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 50px;
                    height: 50px;
                    background: var(--hikev-gradient);
                    color: white;
                    border-radius: 50%;
                    font-weight: 600;
                    font-size: 18px;
                    box-shadow: 0 4px 15px var(--hikev-shadow-blue);
                }
                .action-content {
                    flex: 1;
                    padding-top: 5px;
                }
                .action-content p {
                    margin: 0;
                    color: var(--hikev-primary-dark);
                    line-height: 1.8;
                    font-size: 16px;
                    text-align: justify;
                }
                .bg-light {
                    background: #f8f9fa;
                }
                .bg-white {
                    background: white;
                }
            `}</style>
        </section>
    )
}

export default ActionsList;
